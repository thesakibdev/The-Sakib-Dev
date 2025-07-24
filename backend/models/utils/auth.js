import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";

// Generate JWT token
const generateToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};

// Verify JWT token
const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
};

// Extract token from request headers
const extractToken = (req) => {
  const authHeader = req.headers.get("authorization");
  if (authHeader && authHeader.startsWith("Bearer ")) {
    return authHeader.substring(7);
  }
  return null;
};

// Authentication middleware
const authenticateToken = async (req) => {
  try {
    const token = extractToken(req);

    if (!token) {
      return { success: false, message: "Access token required" };
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return { success: false, message: "Invalid or expired token" };
    }

    return { success: true, user: decoded };
  } catch (error) {
    return { success: false, message: "Authentication failed" };
  }
};

// Admin authorization middleware
const requireAdmin = async (req) => {
  const authResult = await authenticateToken(req);

  if (!authResult.success) {
    return authResult;
  }

  if (
    authResult.user.role !== "admin" &&
    authResult.user.role !== "super_admin"
  ) {
    return { success: false, message: "Admin access required" };
  }

  return authResult;
};

// Super admin authorization middleware
const requireSuperAdmin = async (req) => {
  const authResult = await authenticateToken(req);

  if (!authResult.success) {
    return authResult;
  }

  if (authResult.user.role !== "super_admin") {
    return { success: false, message: "Super admin access required" };
  }

  return authResult;
};

// Create protected route wrapper
const withAuth = (handler, authLevel = "admin") => {
  return async (req, res) => {
    let authResult;

    switch (authLevel) {
      case "super_admin":
        authResult = await requireSuperAdmin(req);
        break;
      case "admin":
        authResult = await requireAdmin(req);
        break;
      default:
        authResult = await authenticateToken(req);
    }

    if (!authResult.success) {
      return res.json(
        {
          success: false,
          message: authResult.message,
        },
        { status: 401 }
      );
    }

    // Add user to request context
      req.user = authResult.user;

    return handler(req, res);
  };
};

export {
  generateToken,
  verifyToken,
  extractToken,
  authenticateToken,
  requireAdmin,
  requireSuperAdmin,
  withAuth,
};

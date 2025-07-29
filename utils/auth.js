export function getUserFromRequest(request) {
  try {
    const userHeader = request.headers.get("user");
    if (userHeader) {
      return JSON.parse(userHeader);
    }
    return null;
  } catch (error) {
    console.error("Error parsing user from request:", error);
    return null;
  }
}

export function verifyToken(token) {
  try {
    const jwt = require("jsonwebtoken");
    return jwt.verify(token, process.env.JWT_SECRET || "your-secret-key");
  } catch (error) {
    return null;
  }
} 
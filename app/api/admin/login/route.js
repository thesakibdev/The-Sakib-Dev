import { connectDB } from "@/dbConfig/dbConfig";
import Admin from "@/models/admin.model";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

connectDB();

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return NextResponse.json({ message: "Admin not found" }, { status: 404 });
    }

    const isPasswordCorrect = await bcrypt.compare(password, admin.password);
    if (!isPasswordCorrect) {
      return NextResponse.json(
        { message: "Invalid password" },
        { status: 401 }
      );
    }

    // Create JWT token with user info
    const token = jwt.sign(
      {
        userId: admin._id,
        name: admin.name,
        email: admin.email,
        role: "admin"
      },
      process.env.JWT_SECRET || "your-secret-key",
      { expiresIn: "7d" }
    );

    // Create response with success message
    const response = NextResponse.json(
      { 
        message: "Admin logged in successfully",
        user: {
          id: admin._id,
          name: admin.name,
          email: admin.email,
          role: "admin"
        }
      },
      { status: 200 }
    );

    // Set HTTP-only cookie with JWT token
    response.cookies.set("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      path: "/"
    });

    return response;
  } catch (error) {
    console.error("Error logging in admin:", error);
    return NextResponse.json(
      { message: "Error logging in admin" },
      { status: 500 }
    );
  }
}

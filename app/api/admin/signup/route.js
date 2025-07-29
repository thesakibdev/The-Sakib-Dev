import { connectDB } from "@/dbConfig/dbConfig";
import Admin from "@/models/admin.model";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

connectDB();

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = await Admin.create({
      name,
      email,
      password: hashedPassword,
    });
    if (!admin) {
      return NextResponse.json(
        { message: "Admin not created" },
        { status: 400 }
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
        message: "Admin signed up successfully",
        user: {
          id: admin._id,
          name: admin.name,
          email: admin.email,
          role: "admin"
        }
      },
      { status: 201 }
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
    console.log("Error signing up admin", error);
    return NextResponse.json(
      { message: "Error signing up admin" },
      { status: 500 }
    );
  }
}

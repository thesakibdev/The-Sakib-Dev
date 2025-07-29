import { NextResponse } from "next/server";


export async function GET(request) {
  try {
    // Get user info from middleware
    const user = request.headers.get("user");
    
    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Profile retrieved successfully",
      user: {
        id: user.userId,
        name: user.name,
        email: user.email,
        role: user.role
      }
    }, { status: 200 });

  } catch (error) {
    console.error("Error getting profile:", error);
    return NextResponse.json(
      { message: "Error getting profile" },
      { status: 500 }
    );
  }
} 
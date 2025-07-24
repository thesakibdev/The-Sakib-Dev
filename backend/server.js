// backend/index.js
import express from "express";
import cors from "cors";
import connectDB from "./lib/db.js";
import dotenv from "dotenv";

// Import routes
import authRoutes from "./routers/authRoutes.js";
import projectRoutes from "./routers/projectRoutes.js";
import contactRoutes from "./routers/contactRoutes.js";
import testimonialRoutes from "./routers/testimonialRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;

// CORS configuration
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://pinkziraffe.com",
  "https://www.pinkziraffe.com",
  "https://coolify.pinkziraffe.com",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/projects", projectRoutes);
app.use("/api/v1/contact", contactRoutes);
app.use("/api/v1/testimonials", testimonialRoutes);

// Base route
app.get("/", (req, res) => {
  res.json({
    message: "The Sakib Dev API is running!",
    version: "1.0.0",
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong!",
    error:
      process.env.NODE_ENV === "development"
        ? err.message
        : "Internal server error",
  });
});

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
  connectDB();
});

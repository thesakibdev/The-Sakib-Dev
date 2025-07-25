import cloudinary from "cloudinary";
import multer from "multer";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_API_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Multer storage in memory
const storage = new multer.memoryStorage();
const upload = multer({ storage }); // Middleware to handle file uploads

// Utility for uploading image and generating optimized URL
const imageUploadUtil = async (fileBuffer, public_id, folder) => {
  try {
    // Use a Promise wrapper to handle the async nature of upload_stream
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder,
          public_id,
          resource_type: "auto", // Automatically detect file type
        },
        (error, uploadResult) => {
          if (error) {
            return reject(error); // Reject the Promise if there's an error
          }
          resolve(uploadResult); // Resolve the Promise with the result
        }
      );

      uploadStream.end(fileBuffer); // End the stream with the file buffer
    });

    // Generate the optimized URL
    const optimizedUrl = cloudinary.url(result.public_id, {
      fetch_format: "auto", // Auto-select the best format
      quality: "auto", // Optimize quality for delivery
    });

    // Return the relevant details
    return {
      optimizedUrl,
      public_id: result.public_id,
    };
  } catch (error) {
    console.error("Cloudinary Upload Failed:", error);
    throw new Error(`Cloudinary Upload Failed: ${error.message}`);
  }
};

const cloudinaryDelete = async (public_id) => {
  try {
    await cloudinary.uploader.destroy(public_id, {
      invalidate: true,
    });
  } catch (error) {
    console.error("Error deleting image from Cloudinary:", error);
  }
};

export { upload, imageUploadUtil, cloudinaryDelete };

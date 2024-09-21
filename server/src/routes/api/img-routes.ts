// // server.js or a separate route file
// import express from 'express';
// import { v2 as cloudinary } from 'cloudinary';
// import dotenv from 'dotenv';

// dotenv.config(); // load .env variables

// // Initialize express
// const app = express();
// // Ensure environment variables are set
// const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
// const apiKey = process.env.CLOUDINARY_API_KEY;
// const apiSecret = process.env.CLOUDINARY_API_SECRET;

// if (!cloudName || !apiKey || !apiSecret) {
//     throw new Error("Cloudinary configuration variables are not properly set.");
// }

// // Configure Cloudinary with the environment variables
// cloudinary.config({
//     cloud_name: cloudName,
//     api_key: apiKey,
//     api_secret: apiSecret,
// });

// // Set up multer for file upload handling (you can configure the storage if needed)
// const upload = multer({ dest: 'uploads/' }); // This saves files to a temporary folder

// // POST route to handle image upload
// app.post('/api/upload', upload.single('image'), async (req, res) => {
//     try {
//         // Upload the file to Cloudinary
//         const result = await cloudinary.uploader.upload(req.file.path, {
//             public_id: req.body.public_id || undefined, // Optional, set custom public_id
//         });

//         // Return the secure URL from Cloudinary
//         res.json({
//             success: true,
//             url: result.secure_url,
//         });
//     } catch (error) {
//         console.error('Error uploading to Cloudinary:', error);
//         res.status(500).json({ success: false, error: 'Failed to upload image' });
//     }
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

// import { v2 as cloudinary } from 'cloudinary';
// import dotenv from 'dotenv';
// dotenv.config();

// async function imgUpload(path: string) {
//   // Configuration
//   cloudinary.config({ 
//     cloud_name: 'df3imidez', 
//     api_key: '958823327518173', 
//     api_secret: 'sOszwurbeBe97yB3S-eyydtnzL8' // Click 'View API Keys' above to copy your API secret
//   });
  
//   try {
//     // Upload an image
//     const uploadResult = await cloudinary.uploader.upload(
//       path, {
//         public_id: 'profile_pic',
//       }
//     );
//     console.log(`uploading... ${uploadResult}`);
    
//     // Optimize delivery by resizing and applying auto-format and auto-quality
//     const optimizeUrl = cloudinary.url('profile_pic', {
//       fetch_format: 'auto',
//       quality: 'auto'
//     });
//     console.log(optimizeUrl);
    
//     // Transform the image: auto-crop to square aspect_ratio
//     const autoCropUrl = cloudinary.url('profile_pic', {
//       crop: 'auto',
//       gravity: 'auto',
//       width: 500,
//       height: 500,
//     });
//     console.log(autoCropUrl);

//     return optimizeUrl;
//   } catch (error) {
//     console.log(error);

//     return error;
//   }

  
// }

// export default imgUpload('');

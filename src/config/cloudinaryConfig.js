import dotenv from 'dotenv';
import cloudinaryLib from 'cloudinary';

dotenv.config();

cloudinaryLib.v2.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_SECRET_KEY,
});

export const cloudinary = cloudinaryLib.v2;


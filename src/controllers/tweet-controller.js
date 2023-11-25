import TweetService from "../services/tweet-service.js";
import { cloudinary } from '../config/cloudinaryConfig.js';
import { getDataUri } from '../middlewares/multer.js';


const tweetService = new TweetService();

export const createTweet = async (req, res)=> {
    
    try {
        
        const dataUriResponse = getDataUri(req.file.buffer);
        const uploadOptions = {
            folder: 'TwitterImages', // folder in which images will get stored on cloudinary
        };

        const twitterImgStore = await cloudinary.uploader.upload(dataUriResponse.content,uploadOptions);
        const payload = {
            content : req.body.content,
            image : twitterImgStore.secure_url,
            userId  : req.user.id
        }
        
        const response = await tweetService.createTweet(payload);
        console.log(response);
        return res.status(201).json({
            data : response,
            message : "Successfully created the tweet",
            success : true

        })
            
    } catch (error) {
        return res.status(500).json({
            success : false,
            message : 'Something went wrong while creating the tweet',
            data : {},
            err : error
        });
    }    
}

export const getTweet = async (req, res)=> {

    try {
        const response = await tweetService.get(req.params.id);
        return res.status(200).json({
            success : true,
            message : 'Successfully fetched a tweet',
            data : response,
            err : {}
        });
    } catch (error) {
        return res.status(500).json({
            success : false,
            message : 'Something went wrong',
            data : {},
            err : error
        });
    }

}
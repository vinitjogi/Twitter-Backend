// defining the tweet structure: 

import mongoose from 'mongoose';

const tweetSchema = new mongoose.Schema({
    content : {
        type : String,
        required : true,
        max : [250, 'Tweet cannot be more than 250 characters']
    },

    likes : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Like'
        }
    ],

    comments : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Comment'
        }
    ],
    // hashtags : [
    //     {
    //         type : mongoose.Schema.Types.ObjectId,
    //         ref : 'Hashtag'
    //     }
    // ]
    image : {
        type : String,
        required : false,
    }
},{timestamps : true});


const Tweet = mongoose.model('Tweet', tweetSchema);

export default Tweet;
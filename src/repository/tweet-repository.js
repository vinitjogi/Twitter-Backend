import Tweet from '../models/tweet.js'
import CrudRepository from './crud-repository.js';

class TweetRepository extends CrudRepository{

    constructor(){
        super(Tweet);
    }

    async create(data){
        try {
            console.log('tweet repo: ' ,data);
            const tweet = await Tweet.create(data);
            console.log(tweet);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async get(tweetId){
        try {
            const tweet = await Tweet.findById(tweetId);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getWithComments(tweetId){
        try {
            const tweet = await Tweet.findById(tweetId).populate({
                path: 'comments',
                populate: {
                    path: 'comments'
                }
            }).lean();
            // console.log("in repo", tweet);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    // async update(tweetId, data){
    //     try {
    //         const tweet = await Tweet.findByIdAndUpdate(tweetId, data, {new : true});
    //         return tweet;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    async destroy(tweetId){
        try {
            const tweet = await Tweet.findByIdAndRemove(tweetId);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll(offset, limit){
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async find(id){
        try {
            const tweet = await Tweet.findById(id).populate({path : 'likes'});;
            return tweet
        } catch (error) {
            console.log(error);
        }
    }
}


export default TweetRepository;
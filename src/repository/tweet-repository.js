import Tweet from '../models/tweet.js'
import CrudRepository from './crud-repository.js';

class TweetRepository extends CrudRepository{

    constructor(){
        super(Tweet);
    }

    async create(data){
        try {
            const tweet = await Tweet.create(data);
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

}


export default TweetRepository;
const Hashtag = require('../models/hashtags');

class HashtagRepository{

    async create(data){
        try {
            const tag = await Hashtag.create(data);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    async bulkCreate(data){
        try {
            const tags = await Hashtag.insertMany(data); //array of objects
            return tags;
        } catch (error) {
            console.log(error);
        }
    }

    async get(tweetId){
        try {
            const tag = await Hashtag.findById(tweetId);
            return tag;
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
            const response = await Hashtag.findByIdAndRemove(tweetId);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async findByName(titleList){
        try {
            const tags = await Hashtag.find({
                title : titleList
            });
            return tags;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = HashtagRepository;
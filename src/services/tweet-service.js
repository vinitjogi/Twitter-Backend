import {TweetRepository,HashtagRepository} from '../repository/index.js'
class TweetService{

    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async createTweet(data){
        const content = data.content;
        let tags = content.match(/#[a-zA-Z0-9_]+/g); // this regex extracts hashtags
        tags = tags.map((tag) => tag.substring(1));
        tags = tags.map((tag) => tag.toLowerCase());
        // console.log(tags);

        const tweet = await this.tweetRepository.create(data); 
        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
        let titleOfPresentTags = alreadyPresentTags.map((tag) => tag.title);
 
        let newTags = tags.filter(tag => !titleOfPresentTags.includes(tag));
        newTags = newTags.map((tag) => {
            return{
                title : tag,
                tweets: [tweet.id]
            }
        });
        await this.hashtagRepository.bulkCreate(newTags);
        alreadyPresentTags.forEach((tag) => {
            tag.tweets.push(tweet.id);
            tag.save();
        })
        return tweet;
    }

    async get(tweetId){
        const tweet = await this.tweetRepository.getWithComments(tweetId);
        console.log(tweet);
        return tweet;
    }
}

export default TweetService;


/*
    structure of content => 
        this is my #first #tweet. I'm really #excited !!

*/ 
const express = require('express');
const connect = require('./config/database')
const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');
const app = express();
const PORT = 3000;

app.listen(PORT, async () => {
    console.log(`server started on port ${PORT}`);
    await connect();
    console.log('mongodb connected');

    // const tweet = await Tweet.create({
    //     content : 'second tweet',
        
    // });

    // console.log(tweet);

    // const tweet = await Tweet.find({
    //     userEmail : 'a@b.com'
    // });


    const tweetRepo = new TweetRepository();

    const tweet = await tweetRepo.create({
        content : 'tweet with comment schema in action'
    });
    console.log(tweet);

    const comment = await Comment.create({
        content : 'new comment'
    })
    tweet.comments.push(comment);
    await tweet.save();
    console.log(tweet);
});
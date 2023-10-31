import express from 'express';
import { connect } from './config/database.js';
import bodyParser from 'body-parser';
import { UserRepository, TweetRepository } from './repository/index.js';

import LikeService from './services/like-service.js';
const app = express();

import apiRoutes from './routes/index.js';

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use('/api', apiRoutes);

app.listen(PORT, async () => {
    console.log(`server started on port ${PORT}`);
    await connect();
    console.log('mongodb connected'); 

    // const userRepo = new UserRepository();
    // const tweetRepo = new TweetRepository();
    // const tweets = await tweetRepo.getAll(0, 10)
    // const users = await userRepo.getAll()


    // const likeService = new LikeService();
    // await likeService.toggleLike(tweets[0].id, 'Tweet', users[0].id)




});



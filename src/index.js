import express from 'express';
import { connect } from './config/database.js';
const app = express();
import Service from './services/tweet-service.js';

const PORT = 3000;


app.listen(PORT, async () => {
    console.log(`server started on port ${PORT}`);
    await connect();
    console.log('mongodb connected'); 

    let tweetSer = new Service();
    await tweetSer.createTweet({
        content : '#refactoring completed!!'
    }) 
});



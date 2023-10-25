import express from 'express';
import { connect } from './config/database.js';
import bodyParser from 'body-parser';
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

});



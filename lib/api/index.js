import Datastore from 'nedb';
import bodyParser from 'body-parser';
import express from 'express';

import router from './router';

let api = express();
let db = new Datastore({
    autoload: true,
    filename: process.env.DB_FILE
});

// Api configuration
api.set('db', db);

api.use( bodyParser.json() );

router(api);

export default api;

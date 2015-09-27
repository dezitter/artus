import Datastore from 'nedb';
import bodyParser from 'body-parser';
import express from 'express';

import Parser from '../parser';
import router from './router';

let api = express();
let parser = new Parser({
    token: process.env.READABILITY_PARSER_KEY
});
let db = new Datastore({
    autoload: true,
    filename: process.env.DB_FILE
});

// Api configuration
api.set('db', db);
api.set('parser', parser);

api.use( bodyParser.json() );

router(api);

export default api;

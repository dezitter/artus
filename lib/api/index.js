import Datastore from 'nedb';
import bodyParser from 'body-parser';
import express from 'express';

import Parser from '../parser';
import router from './router';
import logErrorMiddleware from './middlewares/log-error';
import sendErrorMiddleware from './middlewares/send-error';

const api = express();
const parser = new Parser({
    token: process.env.READABILITY_PARSER_KEY
});
const db = new Datastore({
    autoload: true,
    filename: process.env.DB_FILE
});

// Api configuration
api.set('db', db);
api.set('parser', parser);

// Api routing
api.use( bodyParser.json() );
router(api);
api.use(logErrorMiddleware);
api.use(sendErrorMiddleware);

export default api;

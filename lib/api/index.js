import Datastore from 'nedb';
import express from 'express';

import router from './router';

let api = express();
let db = new Datastore({
    autoload: true,
    filename: process.env.DB_FILE
});

db.remove({}, { multi: true });
db.insert([
    { title: 'foo', content: 'Lorem Ipsum...' },
    { title: 'bar', content: 'Lorem Ipsum...' },
    { title: 'quz', content: 'Lorem Ipsum...' },
]);

// Api configuration
api.set('db', db);

router(api);

export default api;

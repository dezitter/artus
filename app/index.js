import express from 'express';
import Debug from 'debug';

import api from '../lib/api';
import apiMiddleware from './api-middleware';
import jsxEngine from './jsx-engine';
import router from './router';
import routerMiddleware from './router/middleware';

const PORT = process.env.PORT;
const API_PORT = process.env.API_PORT;

let app = express();
let debug = Debug('artus');

// Application configuration
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine);

app.use( express.static(__dirname + '/../dist') );
app.use('/api', apiMiddleware );
app.use( routerMiddleware(router) );

app.listen(PORT, () => debug(`Server listening on port ${PORT}`));
api.listen(API_PORT, () => debug(`Api listening on port ${API_PORT}`));

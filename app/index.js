import express from 'express';
import Debug from 'debug';

import api from '../lib/api';
import apiMiddleware from './middlewares/api';
import logErrorMiddleware from './middlewares/log-error';
import errorMiddleware from './middlewares/error';
import jsxEngine from './jsx-engine';
import router from './router';
import routerMiddleware from './router/middleware';

const { PORT, API_PORT } = process.env;

const app = express();
const debug = Debug('artus');

// Application configuration
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine);

app.use( express.static(__dirname + '/../dist') );
app.use( express.static(__dirname + '/../assets') );
app.use('/api', apiMiddleware );
app.use( routerMiddleware(router) );
app.use( logErrorMiddleware );
app.use( errorMiddleware );

app.listen(PORT, () => debug(`Server listening on port ${PORT}`));
api.listen(API_PORT, () => debug(`Api listening on port ${API_PORT}`));

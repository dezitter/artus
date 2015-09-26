import express from 'express';
import Debug from 'debug';

import jsxEngine from './jsx-engine';
import router from './router';
import routerMiddleware from './router/middleware';

const PORT = process.env.PORT || 3000;

let app = express();
let debug = Debug('artus');

// Application configuration
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine);

app.use( express.static(__dirname + '/../dist') );
app.use( routerMiddleware(router) );

app.listen(PORT, () => debug(`Server listening on port ${PORT}`));

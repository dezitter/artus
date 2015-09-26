import express from 'express';
import Debug from 'debug';

import jsxEngine from './jsx-engine';

const PORT = process.env.PORT || 3000;

let app = express();
let debug = Debug('artus');

// Application configuration
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine);

app.get('/', function(req,res) {
    res.render('page/home', {
        title: 'Home'
    });
});

app.listen(PORT, () => debug(`Server listening on port ${PORT}`));

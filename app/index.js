import express from 'express';
import Debug from 'debug';
import React from 'react';

import HomePageComponent from './views/page/home';

const PORT = process.env.PORT || 3000;

let app = express();
let debug = Debug('artus');

app.get('/', function(req,res) {
    let component = React.createElement(HomePageComponent);
    let html = React.renderToString(component);

    res.send(html);
});

app.listen(PORT, () => debug(`Server listening on port ${PORT}`));

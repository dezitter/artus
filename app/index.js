import express from 'express';
import Debug from 'debug';

const PORT = process.env.PORT || 3000;

let app = express();
let debug = Debug('artus');

app.get('/', function(req,res) {
    res.send('hello');
});

app.listen(PORT, () => debug(`Server listening on port ${PORT}`));

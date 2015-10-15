import contra from 'contra';

import tasksFactory from './tasks-factory';

// create the 'done' callback for contra.waterfall
function createDoneCallback(req, res, next) {
    return function done(err, result) {
        if (err) { return next(err); }
        res.send(result);
    }
}

export default function(api) {
    const tasks = tasksFactory({
        db: api.get('db'),
        parser: api.get('parser')
    });

    api.get('/articles', function (req, res, next) {
        const done = createDoneCallback(req, res, next);
        const options = { limit: req.query.limit };

        contra.waterfall([
            contra.curry(tasks.findAll, options)
        ], done);
    });

    api.get('/article/:_id', function (req, res, next) {
        const _id = req.params._id;
        const done = createDoneCallback(req, res, next);

        contra.waterfall([
            contra.curry(tasks.findArticle, _id)
        ], done);
    });

    api.delete('/article/:_id', function (req, res, next) {
        const _id = req.params._id;
        const done = createDoneCallback(req, res, next);

        contra.waterfall([
            contra.curry(tasks.findArticle, _id),
            tasks.removeArticle
        ], done);
    });

    api.post('/article', function (req, res, next) {
        const url = req.body.url;
        const done = createDoneCallback(req, res, next);

        contra.waterfall([
            contra.curry(tasks.fetchUrl, url),
            tasks.insertArticle
        ], done);
    });

    api.post('/article/:_id/tags', function (req, res, next) {
        const _id = req.params._id;
        const params = { tags: req.body.tags };
        const done = createDoneCallback(req, res, next);

        contra.waterfall([
            contra.curry(tasks.updateArticle, _id, params),
            tasks.findArticle
        ], done);
    });
}

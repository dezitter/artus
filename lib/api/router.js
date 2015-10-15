const ARTICLE_PARAMS = ['author', 'content', 'domain', 'excerpt', 'title', 'url'];

export default function(api) {
    const db = api.get('db');
    const parser = api.get('parser');

    api.get('/articles', function (req, res, next) {
        db.find({})
          .limit(req.query.limit)
          .sort({ date_added: -1 })
          .projection({ content: 0 })
          .exec((err, articles) => {
              if (err) { return next(err); }

              res.send(articles);
          });
    });

    api.get('/article/:_id', function (req, res, next) {
        db.findOne({ _id: req.params._id }, (err, article) => {
            if (err) { return next(err); }

            res.send(article);
        });
    });

    api.delete('/article/:_id', function (req, res, next) {
        db.findOne({ _id: req.params._id }, (err, article) => {
            if (err) { return next(err); }

            db.remove({ _id: req.params._id }, {}, (err) => {
                if (err) { return next(err); }

                res.send(article);
            });
        });
    });

    api.post('/article', function (req, res, next) {
        parser.fetch(req.body.url, (err, result) => {
            if (err) { return next(err); }

            let article = { date_added: new Date() };
            ARTICLE_PARAMS.forEach((param) => {
                article[param] = result[param];
            });

            db.insert(article, (err, _article) => {
                if (err) { return next(err); }

                res.send(_article);
            });
        });
    });

    api.post('/article/:_id/tags', function (req, res, next) {
        const _id = req.params._id;;
        const update = { $set: { tags: req.body.tags } };

        db.update({ _id }, update, {}, (err) => {
            if (err) { return next(err); }

            db.findOne({ _id }, (err, article) => {
                if (err) { return next(err); }

                res.send(article);
            });
        });
    });
}

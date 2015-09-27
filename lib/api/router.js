export default function(api) {
    const db = api.get('db');
    const parser = api.get('parser');

    api.get('/articles', function (req, res) {
        db.find({})
          .sort({ date_added: -1 })
          .exec(function(err, articles) {
            res.send(articles);
        });
    });

    api.get('/article/:_id', function (req, res) {
        db.findOne({ _id: req.params._id }, function(err, article) {
            res.send(article);
        });
    });

    api.post('/article', function (req, res) {
        parser.fetch(req.body.url, function(err, article) {
            article = {
                author    : article.author,
                content   : article.content,
                excerpt   : article.excerpt,
                date_added: new Date(),
                domain    : article.domain,
                title     : article.title,
                url       : article.url
            };

            db.insert(article, function(err, article) {
                res.send(article);
            });

        });

    });

}

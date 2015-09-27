export default function(api) {
    const db = api.get('db');

    api.get('/articles', function (req, res) {
        db.find({}, function(err, articles) {
            res.send(articles);
        });
    });

    api.get('/article/:_id', function (req, res) {
        db.findOne({ _id: req.params._id }, function(err, article) {
            res.send(article);
        });
    });

    api.post('/article', function (req, res) {
        const article = Object.assign({ date_added: new Date() }, req.body);

        db.insert(article, function(err, article) {
            res.send(article);
        });
    });

}

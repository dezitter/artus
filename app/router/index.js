export default function(app) {
    app.get('/', function(req, res) {
        res.render('page/home', {
            title: 'Home'
        });
    });
}

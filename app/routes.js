let articles = [
    { id: '89d8073b', title: 'foo', content: 'Lorem Ipsum...' },
    { id: '5a179a7e', title: 'bar', content: 'Lorem Ipsum...' },
    { id: '160a3e41', title: 'quz', content: 'Lorem Ipsum...' },
];

export default {
    '/': function(req, res) {
        res.render('page/home', {
            title: 'Home',
            props: {
                articles: articles
            }
        });
    },

    '/article/:id': function(req, res) {
        let article = articles.find( a => (a.id === req.params.id) );

        res.render('page/article', {
            title: article.title,
            props: {
                article: article
            }
        });
    }
}


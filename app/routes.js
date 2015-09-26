import api from './api';
import renderer from './router/renderer';

export default {
    '/': function() {
        api.get('/articles')
           .end((err, res) => {
            renderer.call(this, 'page/home', {
                title: 'Home',
                props: { articles: res.body }
            });
        });
    },

    '/article/:id': function(id) {
        api.get('/articles')
           .end((err, res) => {
            let article = res.body.find( a => (a.id === id) );

            renderer.call(this, 'page/article', {
                title: article.title,
                props: { article: article }
            });
       });
    }
}

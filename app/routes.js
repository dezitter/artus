import renderer from './router/renderer';

import ArticleActions from './alt/actions/Article';

export default {
    '/': function() {
        ArticleActions.fetch({ limit: 10 })
            .then((articles) => {
                renderer.call(this, 'page/home', {
                    title: 'Home',
                    props: { articles }
                });
            });
    },

    '/article/:id': function(id) {
        ArticleActions.get({ _id: id })
            .then((article) => {
                renderer.call(this, 'page/article', {
                    title: article.title,
                    props: { article }
                });
           });
    },

    '/articles': function() {
        ArticleActions.fetch()
            .then((articles) => {
                renderer.call(this, 'page/articles', {
                    title: 'Articles',
                    props: { articles }
                });
            });
    }
};

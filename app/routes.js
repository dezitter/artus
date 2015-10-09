import renderer from './router/renderer';

import ArticleStore from './alt/stores/Article';
import ArticleSource from './alt/sources/Article';

function getInitialState(data) {
    const state = Object.assign(ArticleStore.getInitialState(), data);

    return { 'ArticleStore': state };
}

export default {
    '/': function() {
        ArticleSource.fetch({ limit: 10 })
            .then((articles) => {
                renderer.call(this, 'page/home', {
                    title: 'Home',
                    store: getInitialState({ articles })
                });
            });
    },

    '/article/:id': function(id) {
        ArticleSource.get({ _id: id })
            .then((article) => {
                renderer.call(this, 'page/article', {
                    title: article.title,
                    store: getInitialState({ article })
                });
            });
    },

    '/articles': function() {
        ArticleSource.fetch()
            .then((articles) => {
                renderer.call(this, 'page/articles', {
                    title: 'Articles',
                    store: getInitialState({ articles })
                });
            });
    }
};

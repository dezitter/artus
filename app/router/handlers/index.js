import ArticleStore from '../../alt/stores/Article';
import ArticleSource from '../../alt/sources/Article';

function getState(data) {
    const store = ArticleStore.getInitialState();
    const state = Object.assign(store, data);

    return { 'ArticleStore': state };
}

const handlers = {

    '/': function() {
        return ArticleSource
            .fetch({ limit: 10 })
            .then((articles) => {
                return { store: getState({ articles }) };
            });
    },

    '/article/:id': function(_id) {
        return ArticleSource.get({ _id: _id })
            .then((article) => {
                return {
                    title: article.title,
                    store: getState({ article })
                };
            });
    },

    '/articles': function() {
        return ArticleSource
            .fetch()
            .then((articles) => {
                return { store: getState({ articles }) };
            });
    }

};

export default handlers;

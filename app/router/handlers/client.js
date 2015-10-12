import ArticleAction from '../../alt/actions/Article';

const handlers = {

    '/': function() {
        return ArticleAction.fetch({ limit: 10 });
    },

    '/article/:id': function(_id) {
        return ArticleAction.get({ _id });
    },

    '/articles': function() {
        return ArticleAction.fetch();
    }

};

export default handlers;

import ArticleAction from '../../alt/actions/Article';

const handlers = {

    '/': function() {
        return ArticleAction.fetch();
    },

    '/article/:id': function(_id) {
        return ArticleAction.get({ _id });
    },

    '/articles': function() {
        return ArticleAction.fetch();
    }

};

export default handlers;

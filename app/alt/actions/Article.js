import alt from '../../alt';
import ArticleSource from '../sources/Article';

class ArticleActions {

    updatePage(page) {
        return page;
    }

    filter(text) {
        return text;
    }

    toggleTagging(article) {
        return {
            article,
            tagging: !article.tagging
        };
    }
}

// delegate calls to ArticleSource
['add', 'del', 'fetch', 'get', 'setTags'].forEach(function(name) {

    ArticleActions.prototype[name] = function(payload) {
        return ArticleSource[name](payload)
            .then((result) => {
                this.dispatch(result);
                return result;
            });
    };

});

export default alt.createActions(ArticleActions);

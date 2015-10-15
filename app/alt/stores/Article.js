import alt from '../../alt';
import ArticleActions from '../actions/Article';

function getInitialState() {
    return {
        article: null,
        articles: [],
        pager: {
            current: 1,
            limit: 10
        },
        filter: {
            text: ''
        }
    };
}

class ArticleStore {
    constructor() {
        Object.assign(this, getInitialState());

        this.exportPublicMethods({ getInitialState });
        this.bindListeners({
            onAdd       : ArticleActions.ADD,
            onDel       : ArticleActions.DEL,
            onFetch     : ArticleActions.FETCH,
            onGet       : ArticleActions.GET,
            onUpdatePage: ArticleActions.UPDATE_PAGE,
            onFilter    : ArticleActions.FILTER,
            onTagging   : ArticleActions.TOGGLE_TAGGING,
            onSetTags   : ArticleActions.SET_TAGS
        });
    }

    findIndex(_id) {
        return this.articles.findIndex(article => (article._id === _id));
    }

    onAdd(article) {
        this.articles.unshift(article);
    }

    onDel(article) {
        const index = this.findIndex(article._id);
        this.articles.splice(index, 1);
    }

    onFetch(articles) {
        this.articles = articles;
    }

    onGet(article) {
        this.article = article;
    }

    onUpdatePage(page) {
        this.pager.current = page;
    }

    onFilter(text) {
        this.filter.text = text;
        this.onUpdatePage.call(this, 1);
    }

    onTagging(params) {
        const { article, tagging } = params;

        this.articles.forEach(function(current) {
            const isSelected = (current._id === article._id);
            current.tagging = isSelected ? tagging : false;
        });
    }

    onSetTags(article) {
        const index = this.findIndex(article._id);

        this.articles[index] = article;
    }
}

export default alt.createStore(ArticleStore, 'ArticleStore');

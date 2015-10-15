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
            onFilter    : ArticleActions.FILTER
        });
    }

    onAdd(article) {
        this.articles = [article].concat(this.articles);
    }

    onDel(article) {
        const articles = [...this.articles];
        const index = articles.findIndex(a => (a._id === article._id));

        articles.splice(index, 1);

        this.articles = articles;
    }

    onFetch(articles) { this.articles = articles; }

    onGet(article) { this.article = article; }

    onUpdatePage(page) {
        this.pager = Object.assign({}, this.pager, { current: page });
    }

    onFilter(text) {
        this.onUpdatePage.call(this, 1);
        this.filter = Object.assign({}, this.filter, { text: text });
    }
}

export default alt.createStore(ArticleStore, 'ArticleStore');

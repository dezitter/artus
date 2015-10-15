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
        this.articles.unshift(article);
    }

    onDel(article) {
        const index = this.articles.findIndex(a => (a._id === article._id));

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
}

export default alt.createStore(ArticleStore, 'ArticleStore');

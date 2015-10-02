import alt from '../../alt';
import ArticleActions from '../actions/Article';

class ArticleStore {

    constructor() {
        this.article = null;
        this.articles = [];

        this.pager = {
            current: 1,
            limit: 10
        };

        this.filter = {
            text: ''
        };

        this.bindListeners({
            handleAddArticle: ArticleActions.ADD,
            handleDelArticle: ArticleActions.DEL,
            handleFetchArticles: ArticleActions.FETCH,
            handleGetArticle: ArticleActions.GET,
            handleUpdatePage: ArticleActions.UPDATE_PAGE,
            handleFilter: ArticleActions.FILTER
        });
    }

    handleAddArticle(article) {
        this.articles = [article].concat(this.articles);
    }

    handleDelArticle(article) {
        const articles = [...this.articles];
        const index = articles.find(a => (a._id === article._id));

        articles.splice(index, 1);

        this.articles = articles;
    }

    handleFetchArticles(articles) {
        this.articles = articles;
    }

    handleGetArticle(article) {
        this.article = article;
    }

    handleUpdatePage(page) {
        this.pager.current = page;
    }

    handleFilter(text) {
        this.pager.current = 1;
        this.filter = {
            text: text
        };
    }
}

export default alt.createStore(ArticleStore, 'ArticleStore');

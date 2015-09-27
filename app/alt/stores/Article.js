import alt from '../../alt';
import ArticleActions from '../actions/Article';

class ArticleStore {

    constructor() {
        this.article = null;
        this.articles = [];

        this.bindListeners({
            handleAddArticle: ArticleActions.ADD,
            handleFetchArticles: ArticleActions.FETCH,
            handleGetArticle: ArticleActions.GET
        });
    }

    handleAddArticle(article) {
        this.articles = [article].concat(this.articles);
    }

    handleFetchArticles(articles) {
        this.articles = articles;
    }

    handleGetArticle(article) {
        this.article = article;
    }
}

export default alt.createStore(ArticleStore, 'ArticleStore');

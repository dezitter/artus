import alt from '../../alt';
import api from '../../api';
import { wrapPromiseAll } from './util/promise';

class ArticleActions {
    add(payload) {
        return api.post('/article')
                  .send({ url: payload.url });
    }

    del(payload) {
        return api.del(`/article/${payload._id}`);
    }

    fetch(payload={}) {
        return api.get('/articles')
                  .query({ limit: payload.limit });
    }

    get(payload) {
        return api.get(`/article/${payload._id}`);
    }

    updatePage(page) {
        return page;
    }

    filter(text) {
        return text;
    }
}

wrapPromiseAll(ArticleActions);

export default alt.createActions(ArticleActions);

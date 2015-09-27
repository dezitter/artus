import alt from '../../alt';
import api from '../../api';
import { wrapPromiseAll } from './util/promise';

class ArticleActions {
    add(payload) {
        return api.post('/article')
                  .send({ url: payload.url });
    }

    fetch() {
        return api.get('/articles');
    }

    get(payload) {
        return api.get(`/article/${payload._id}`);
    }
}

wrapPromiseAll(ArticleActions);

export default alt.createActions(ArticleActions);

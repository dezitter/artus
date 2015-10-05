import api from '../../api';
import { promisifyAll } from '../../util/promise';

class ArticleSource {

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
}

promisifyAll(ArticleSource);

export default new ArticleSource();

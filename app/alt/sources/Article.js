import api from '../../api';
import { promisify } from '../../util/decorators';

class ArticleSource {

    @promisify
    add(payload) {
        return api.post('/article')
                  .send({ url: payload.url });
    }

    @promisify
    del(payload) {
        return api.del(`/article/${payload._id}`);
    }

    @promisify
    fetch(payload={}) {
        return api.get('/articles')
                  .query({ limit: payload.limit });
    }

    @promisify
    get(payload) {
        return api.get(`/article/${payload._id}`);
    }
}

export default new ArticleSource();

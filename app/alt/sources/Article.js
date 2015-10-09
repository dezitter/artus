import api from '../../api';
import { promisify, extractBody} from '../../util/decorators';

class ArticleSource {

    @extractBody
    @promisify
    add(payload) {
        return api.post('/article')
                  .send({ url: payload.url });
    }

    @extractBody
    @promisify
    del(payload) {
        return api.del(`/article/${payload._id}`);
    }

    @extractBody
    @promisify
    fetch(payload={}) {
        return api.get('/articles')
                  .query({ limit: payload.limit });
    }

    @extractBody
    @promisify
    get(payload) {
        return api.get(`/article/${payload._id}`);
    }
}

export default new ArticleSource();

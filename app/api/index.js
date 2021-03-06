import request from 'superagent';
import urlBuilder from './url-builder';

function Api() {}

['get', 'post', 'del'].forEach(function(method) {
    Api.prototype[method] = function(url) {
        return request[method]( urlBuilder(url) );
    };
});

export default new Api();

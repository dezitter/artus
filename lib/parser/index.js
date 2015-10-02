import request from 'superagent';

class Parser {

    constructor(params) {
        this.token = params.token;
        this.endpoint = 'https://readability.com/api/content/v1/parser';
    }

    fetch(url, cb) {
        request.get(this.endpoint)
               .query({
                   url,
                   token: this.token
               })
               .end((err, res) => {
                   if (err) {
                       return cb(err);
                   }

                   cb(null, res.body);
               });
    }

}

export default Parser;

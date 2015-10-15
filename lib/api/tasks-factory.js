const NOT_FOUND_ERROR = 'Article not found.';
const REMOVE_ERROR = 'The article could not be removed.';
const UPDATE_ERROR = 'The article could not be updated.';

const ARTICLE_PARAMS = ['author', 'content', 'domain', 'excerpt', 'title', 'url'];

// copy the white-listed object properties
function pick(object, properties=[]) {
    const result = {};
    properties.forEach(prop => result[prop] = object[prop]);
    return result;
}

export default function(params) {
    const { db, parser } = params;

    function findAll(options, next) {
        db.find({})
          .limit(options.limit)
          .sort({ date_added: -1 })
          .projection({ content: 0 })
          .exec(next);
    }

    function findArticle(_id, next) {
        db.findOne({ _id }, function(err, article) {
            if (!article) {
                err = new Error(NOT_FOUND_ERROR);
            };

            return next(err, article);
        });
    }

    function removeArticle(article, next) {
        const query = { _id: article._id };
        const options = {};

        db.remove(query, options, function(err, numRemoved) {
            if (!numRemoved) {
                err = new Error(REMOVE_ERROR);
            };

            return next(err, article);
        });
    }

    function insertArticle(article, next) {
        db.insert(article, next);
    }

    function updateArticle(_id, params, next) {
        const query = { _id };
        const update = { $set: params };

        db.update({ _id }, update, {}, (err, numReplaced) => {
            if (!numReplaced) {
                err = new Error(UPDATE_ERROR);
            };

            return next(err, _id);
        });
    }

    function fetchUrl(url, next) {
        parser.fetch(url, function(err, result) {
            const params = pick(result, ARTICLE_PARAMS);
            const article = {
                ...params,
                date_added: new Date()
            };

            next(err, article);
        });
    }

    return {
        findAll,
        findArticle,
        removeArticle,
        insertArticle,
        updateArticle,
        fetchUrl
    };
}

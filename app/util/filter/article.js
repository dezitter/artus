import _ from 'lodash';

function matchTitle(article, words) {
    const title = article.title;

    return _.all(words, (word) => title.includes(word));
}

function matchTags(article, words) {
    const tags = article.tags || [];

    return _.all(words, function(word) {
        return tags.some(tag => tag.includes(word));
    });
}

export function filterByTitle(articles, query='') {
    if (!query) return articles;

    const words = _.words(query);
    return articles.filter(article => matchTitle(article, words));
}

export function filterByTags(articles, query='') {
    if (!query) return articles;

    const words = _.words(query);
    return articles.filter(article => matchTags(article, words));
}

export default {

    '/': {
        page: 'page/home',
        options: { title: 'Home' }
    },

    '/article/:id': {
        page: 'page/article'
    },

    '/articles': {
        page: 'page/articles',
        options: { title: 'Articles' }
    }
};

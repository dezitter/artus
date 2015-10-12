import director from 'director';
import routes from './routes';

const _routes = {};
Object.keys(routes)
    .forEach((pattern) => {
        _routes[pattern] = { get: routes[pattern] };
    });

export default new director.http.Router(_routes);

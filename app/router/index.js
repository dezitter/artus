import routes from '../routes';

export default function(app) {
    Object.keys(routes)
        .forEach((pattern) => {
            app.get(pattern, routes[pattern]);
        });
}

import { Promise } from 'es6-promise';

import routeSpecs from './specs';

import handlers from '../handlers';
import renderer from '../renderer';

function callHandler(handler, ...rest) {
    if (typeof handler === 'function') {
        return handler.call(this, ...rest);
    } else {
        return Promise.resolve();
    }
}

function createHandler(pattern) {
    return function(...rest) {
        const specs = routeSpecs[pattern];
        const handler = handlers[pattern];

        callHandler(handler, ...rest)
            .then((options={}) => {
                renderer.call(
                    this,
                    specs.page,
                    Object.assign({}, specs.options, options)
                );
            })
            .catch(error => console.error(error.stack));
    };
}

const routes = {};
Object.keys(routeSpecs)
    .forEach(function(pattern) {
        routes[pattern] = createHandler(pattern);
    });

export default routes;

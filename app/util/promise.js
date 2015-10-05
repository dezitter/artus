import { Promise } from 'es6-promise';

// wraps the given function to always return a Promise
function promisify(fn, ctx) {
    return function promisified(...rest) {
        return new Promise(function(resolve, reject) {
            const result = fn.call(ctx || this, ...rest);

            resolve(result);
        });
    };
}

// wraps all prototype's methods of Type to return a Promise
function promisifyAll(Type) {
    const proto = Type.prototype;

    Object.getOwnPropertyNames(proto)
        .filter( name => (name !== 'constructor') )
        .filter( name => (typeof proto[name] === 'function') )
        .forEach( name => {
            const method = proto[name];

            proto[name] = promisify(method);
        });
}

export { promisify, promisifyAll };

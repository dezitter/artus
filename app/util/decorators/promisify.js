import { Promise } from 'es6-promise';

export function promisify(target, name, descriptor) {
    const fn = descriptor.value;

    descriptor.value = function promisified(...rest) {
        return new Promise((resolve) => {
            const result = fn.call(this, ...rest);

            resolve(result);
        });
    };

    return descriptor;
}

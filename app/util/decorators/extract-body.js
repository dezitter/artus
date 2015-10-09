export function extractBody(target, name, descriptor) {
    const fn = descriptor.value;

    descriptor.value = function(...rest) {
        return fn.call(this, ...rest)
                 .then(res => res.body);
    };

    return descriptor;
}

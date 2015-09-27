import { Promise } from 'es6-promise';

function wrapRequest(request) {
    const promise = new Promise(function(resolve, reject) {
        request.end(function(err, res) {
            if (err) {
                reject(err);
            } else {
                resolve(res.body);
            }
        });
    });

    promise.then(
        result => { this.dispatch(result); },
        error => { console.error(error); }
    );

    return promise;
}

export function wrapPromiseAll(ActionClass) {
    const proto = ActionClass.prototype;

    // Wrap all requests in a promise
    Object.getOwnPropertyNames(proto)
        .filter(methodName => (methodName !== 'constructor'))
        .forEach(function(methodName) {
            const method = proto[methodName];

            proto[methodName] = function(payload) {
                let request = method(payload);

                return wrapRequest.call(this, request);
            };
        });
}

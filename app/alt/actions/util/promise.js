import { Promise } from 'es6-promise';

function wrapRequest(request) {
    return Promise.resolve(request)
        .then(function(res) {
            const result = (res && res.body) || res;

            this.dispatch(result);

            return result;
        }.bind(this), function(err) {
            console.error(err);
        });
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

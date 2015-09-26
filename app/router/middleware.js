export default function(router) {
    return function(req, res, next) {
        router.dispatch(req, res, function(err) {
            if (err) {
                next(err);
            }
        });
    };
}

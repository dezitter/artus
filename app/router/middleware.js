export default function(router) {
    return function(req, res, next) {
        router.attach(function() {
            this.next = next;
        });

        router.dispatch(req, res, function(err) {
            if (err) {
                next(err);
            }
        });
    };
}

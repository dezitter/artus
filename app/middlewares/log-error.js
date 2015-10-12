export default function(err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    next(err);
}

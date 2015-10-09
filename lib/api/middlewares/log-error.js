export default function(err, req, res, next) {
    console.error(err);
    next(err);
}

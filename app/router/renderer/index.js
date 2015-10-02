export default function(page, options) {
    this.res.render(page, Object.assign({
        route: this.req.path
    }, options));
}

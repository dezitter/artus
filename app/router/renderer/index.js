export default function(page, options) {
    const snapshot = JSON.stringify(options.store);

    this.res.render(page, Object.assign({
        snapshot,
        route: this.req.path
    }, options));
}

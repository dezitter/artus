import alt from '../../alt';

export default function(page, options) {
    const snapshot = JSON.stringify(options.store);

    alt.bootstrap(snapshot);

    this.res.render(page, Object.assign({
        snapshot,
        route: this.req.path
    }, options));

    alt.flush();
}

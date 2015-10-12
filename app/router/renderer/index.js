import alt from '../../alt';

export default function(error, page, options={}) {
    if (error) { return this.next(error); }

    const snapshot = JSON.stringify(options.store);

    alt.bootstrap(snapshot);

    this.res.render(page, Object.assign({
        snapshot,
        route: this.req.path
    }, options));

    alt.flush();
}

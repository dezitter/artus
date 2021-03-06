import path from 'path';
import React from 'react';

function clearRequireCache() {
    Object.keys(require.cache)
          .filter( p => p.endsWith('.jsx') )
          .forEach( p => delete require.cache[p] );
}

export default function(componentPath, options, callback) {
    let layoutPath = path.join(this.root, 'layout.jsx');

    const LayoutClass = require(layoutPath);
    const ComponentClass = require(componentPath);

    if (!options.cache) {
        clearRequireCache();
    }

    let component = React.createElement(ComponentClass, options.props);
    let page = React.createElement(
        LayoutClass, {
            title: options.title,
            route: options.route,
            snapshot: options.snapshot,
            content: React.renderToString(component)
        }
    );

    callback(null, '<!DOCTYPE html>' + React.renderToStaticMarkup(page));
}

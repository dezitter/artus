import path from 'path';
import React from 'react';

export default function(componentPath, options, callback) {
    let layoutPath = path.join(this.root, 'layout.jsx');

    let LayoutClass = require(layoutPath);
    let ComponentClass = require(componentPath);

    let component = React.createElement(ComponentClass, options.props);
    let page = React.createElement(
        LayoutClass, {
            title: options.title,
            content: React.renderToString(component)
        }
    );

    callback(null, '<!DOCTYPE html>' + React.renderToStaticMarkup(page));
}

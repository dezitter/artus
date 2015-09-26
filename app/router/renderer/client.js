import React from 'react';

// forces JSX components to be included in the bundle
require('bulk-require')(__dirname, '../../views/**/*.jsx');

export default function(page, options) {
    const ComponentClass = require(`../../views/${page}.jsx`);

    let component = React.createElement(ComponentClass, options.props);
    let container = document.getElementById('content');

    React.render(component, container);
}

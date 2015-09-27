import React from 'react';

import MenuComponent from './components/Menu';

const MENU_ITEMS = [
    { route: '/', label: 'Home' },
    { route: '/articles', label: 'Articles' }
];

class LayoutComponent extends React.Component {

    render() {
        return (
            <html>
                <head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                    <title>{this.props.title}</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </head>
                <body>
                    <MenuComponent
                        items={MENU_ITEMS} />
                    <div
                        id="content"
                        dangerouslySetInnerHTML={ {__html: this.props.content} }>
                    </div>
                    <script src="/js/bundle.js"></script>
                </body>
            </html>
        );
    }
}

export default LayoutComponent;

import React from 'react';

/* Components */
import MenuComponent from './components/menu/Menu';

class LayoutComponent extends React.Component {

    render() {
        return (
            <html>
                <head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                    <title>{this.props.title}</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />

                    <link rel="stylesheet" href="//yui.yahooapis.com/pure/0.6.0/pure-min.css" />
                    <link rel="stylesheet" href="/css/main.css" />
                </head>
                <body>
                    <MenuComponent
                        title={'Artus'}
                        route={this.props.route} />

                    <div id="content"
                         dangerouslySetInnerHTML={ {__html: this.props.content} } />

                    <script type="text/snapshot"
                            dangerouslySetInnerHTML={ {__html: this.props.snapshot} } />

                    <script src="/js/bundle.js" />
                </body>
            </html>
        );
    }
}

export default LayoutComponent;

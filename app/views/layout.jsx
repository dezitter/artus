import React from 'react';

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
                    <div
                        dangerouslySetInnerHTML={ {__html: this.props.content} }>
                    </div>
                </body>
            </html>
        );
    }
}

export default LayoutComponent;

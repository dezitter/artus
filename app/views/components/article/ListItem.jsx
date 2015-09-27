import React from 'react';

import ArticleToolsComponent from './Tools';

class ArticleListItem extends React.Component {

    render() {
        let href = `/article/${this.props.article._id}`;

        return (
            <div className="pure-g">
                <div className="pure-u-4-5">
                    <a href={href}>
                        {this.props.article.title || 'Untitled'}
                    </a>
                </div>
                <div className="pure-u-1-5">
                    <ArticleToolsComponent
                        article={this.props.article} />
                </div>
            </div>
        );
    }

}

export default ArticleListItem;

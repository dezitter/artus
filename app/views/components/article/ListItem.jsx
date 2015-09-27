import React from 'react';

import ArticleToolsComponent from './Tools';

class ArticleListItem extends React.Component {

    render() {
        let href = `/article/${this.props.article._id}`;

        return (
            <div>
                <a href={href}>
                    {this.props.article.title || 'Untitled'}
                </a>
                <ArticleToolsComponent
                    article={this.props.article} />
            </div>
        );
    }

}

export default ArticleListItem;

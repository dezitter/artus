import React from 'react';

import ArticleToolsComponent from './Tools';

class ArticleListItem extends React.Component {

    render() {
        let href = `/article/${this.props.article._id}`;

        return (
            <div className="pure-g article-list-item">
                <div className="pure-u-4-5">
                    <h4>
                        <a href={href} className="article-title">
                            {this.props.article.title || 'Untitled'}
                        </a>
                    </h4>
                    <a href={this.props.article.url} className="article-link">
                        {this.props.article.domain || 'Original article'}
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

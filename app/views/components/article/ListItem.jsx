import React from 'react';

import ArticleToolsComponent from './Tools';
import ArticleInfoComponent from './Info';

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
                    <ArticleInfoComponent
                        article={this.props.article} />
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

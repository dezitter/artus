import React from 'react';

/* Components */
import ArticleInfoComponent from './Info';
import ArticleToolsComponent from './Tools';

class ArticleListItem extends React.Component {

    render() {
        const titleComponent = this.renderTitle();

        return (
            <div className="pure-g article-list-item">
                <div className="pure-u-4-5">
                    {titleComponent}
                    <ArticleInfoComponent article={this.props.article} />
                </div>

                <div className="pure-u-1-5">
                    <ArticleToolsComponent article={this.props.article} />
                </div>
            </div>
        );
    }

    renderTitle() {
        const href = `/article/${this.props.article._id}`;
        const title = this.props.article.title || 'Untitled';

        return (
            <h4>
                <a href={href}
                   className="article-title"> {title} </a>
            </h4>
        );
    }

}

export default ArticleListItem;

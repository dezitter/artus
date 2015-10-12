import React from 'react';

import ArticleListItemComponent from './ListItem';

class ArticleList extends React.Component {

    render() {
        let items = this.props.articles.map(function(article) {
            return (
                <ArticleListItemComponent
                    key={article._id}
                    article={article}
                />
            );
        });

        if (items.length === 0) {
            return (
                <div className="article-list">
                    <div className="panel info">
                        The list is empty.
                    </div>
                </div>
            );
        } else {
            return (
                <div className="article-list">{items}</div>
            );
        }
    }

}

export default ArticleList;

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

        return (
            <div className="article-list">{items}</div>
        );
    }

}

export default ArticleList;

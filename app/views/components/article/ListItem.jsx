import React from 'react';

class ArticleListItem extends React.Component {

    render() {
        return (
            <strong>{this.props.article.title}</strong>
        );
    }

}

export default ArticleListItem;

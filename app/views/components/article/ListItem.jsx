import React from 'react';

class ArticleListItem extends React.Component {

    render() {
        let href = `/article/${this.props.article.id}`;

        return (
            <a href={href}>
                {this.props.article.title}
            </a>
        );
    }

}

export default ArticleListItem;

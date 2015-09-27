import React from 'react';

class ArticleListItem extends React.Component {

    render() {
        let href = `/article/${this.props.article._id}`;

        return (
            <div>
                <a href={href}>
                    {this.props.article.title || 'Untitled'}
                </a>
            </div>
        );
    }

}

export default ArticleListItem;

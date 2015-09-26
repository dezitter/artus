import React from 'react';

class ArticleView extends React.Component {

    render() {
        return (
            <div>
                <h1>{this.props.article.title}</h1>
                <div>{this.props.article.content}</div>
            </div>
        );
    }

}

export default ArticleView;

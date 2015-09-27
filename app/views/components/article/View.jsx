import React from 'react';

class ArticleView extends React.Component {

    render() {
        return (
            <div>
                <h1>{this.props.article.title}</h1>
                <a href={this.props.article.url}>
                    <span>Original article</span>
                </a>
                <div>{this.props.article.content}</div>
            </div>
        );
    }

}

export default ArticleView;

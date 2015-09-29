import React from 'react';

class ArticleView extends React.Component {

    render() {
        return (
            <div className="article-view">
                <h1 className="article-title">{this.props.article.title}</h1>
                <a href={this.props.article.url}>
                    <span>Original article</span>
                </a>
                <div
                   className="article-content"
                   dangerouslySetInnerHTML={{ __html: this.props.article.content }} />
            </div>
        );
    }

}

export default ArticleView;

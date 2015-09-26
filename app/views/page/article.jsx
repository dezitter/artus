import React from 'react';

import ArticleViewComponent from '../components/article/View';

class ArticlePage extends React.Component {

    render() {
        return (
            <ArticleViewComponent
                article={this.props.article}
            />
        );
    }

}

export default ArticlePage;

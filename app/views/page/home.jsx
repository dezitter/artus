import React from 'react';

import ArticleListComponent from '../components/article/List';

class HomePage extends React.Component {

    render() {
        return (
            <ArticleListComponent
                articles={this.props.articles}
            />
        );
    }

}

export default HomePage;

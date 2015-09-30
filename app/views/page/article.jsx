import React from 'react';

import ArticleViewComponent from '../components/article/View';

import ArticleStore from '../../alt/stores/Article';
import StoreDecorator from '../decorators/Store';

class ArticlePage extends React.Component {

    render() {
        return (
            <div className="pure-u-1">
                <ArticleViewComponent
                    article={this.props.article}
                />
            </div>
        );
    }

}

export default StoreDecorator(ArticlePage, ArticleStore);

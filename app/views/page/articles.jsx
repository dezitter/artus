import React from 'react';

import PaginatedArticleListComponent from '../components/article/PaginatedList';

import ArticleStore from '../../alt/stores/Article';
import StoreDecorator from '../decorators/Store';

class ArticlesPage extends React.Component {

    render() {
        return (
            <div className="pure-u-1">
                <PaginatedArticleListComponent
                    {...this.props}
                />
            </div>
        );
    }
}

export default StoreDecorator(ArticlesPage, ArticleStore);

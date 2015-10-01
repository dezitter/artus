import React from 'react';

import FilterablePaginatedListComp from '../components/article/FilterablePaginatedList';

import ArticleStore from '../../alt/stores/Article';
import StoreDecorator from '../decorators/Store';

class ArticlesPage extends React.Component {

    render() {
        return (
            <div className="pure-u-1">
                <FilterablePaginatedListComp
                    {...this.props}
                />
            </div>
        );
    }
}

export default StoreDecorator(ArticlesPage, ArticleStore);

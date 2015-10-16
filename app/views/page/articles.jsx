import React from 'react';

/* Components */
import ListFilterableComponent from '../components/article/list/ListFilterable';

import ArticleStore from '../../alt/stores/Article';
import StoreDecorator from '../decorators/Store';

class ArticlesPage extends React.Component {

    render() {
        return (
            <div className="pure-u-g">
                <div className="pure-u-1">
                    <ListFilterableComponent {...this.props} />
                </div>
            </div>
        );
    }
}

export default StoreDecorator(ArticlesPage, ArticleStore);

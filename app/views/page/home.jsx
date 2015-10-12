import React from 'react';

import AddArticleForm from '../components/article/form/Add';
import ArticleListComponent from '../components/article/List';

import ArticleStore from '../../alt/stores/Article';
import StoreDecorator from '../decorators/Store';

const LIST_LIMIT = 10;

class HomePage extends React.Component {

    render() {
        const articles = this.props.articles.slice(0, LIST_LIMIT);

        return (
            <div className="pure-g">
                <div className="pure-u-1">
                    <AddArticleForm />
                </div>

                <div className="pure-u-1">
                    <ArticleListComponent
                        articles={articles}
                    />
                </div>
            </div>
        );
    }

}

export default StoreDecorator(HomePage, ArticleStore);

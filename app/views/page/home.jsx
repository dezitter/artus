import React from 'react';

import AddArticleForm from '../components/article/form/Add';
import ArticleListComponent from '../components/article/List';

import ArticleStore from '../../alt/stores/Article';
import StoreDecorator from '../decorators/Store';

class HomePage extends React.Component {

    render() {
        return (
            <div className="pure-g">
                <div className="pure-u-1">
                    <AddArticleForm />
                </div>

                <div className="pure-u-1">
                    <ArticleListComponent
                        articles={this.props.articles}
                    />
                </div>
            </div>
        );
    }

}

export default StoreDecorator(HomePage, ArticleStore);

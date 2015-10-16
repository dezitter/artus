import React from 'react';

/* Components */
import AddFormComponent from '../components/article/AddForm';
import ListComponent from '../components/article/list/List';

import ArticleStore from '../../alt/stores/Article';
import StoreDecorator from '../decorators/Store';

const LIST_LIMIT = 10;

class HomePage extends React.Component {

    render() {
        const articles = this.props.articles.slice(0, LIST_LIMIT);

        return (
            <div className="pure-g">
                <div className="pure-u-1">
                    <AddFormComponent />
                </div>

                <div className="pure-u-1">
                    <ListComponent articles={articles} />
                </div>
            </div>
        );
    }

}

export default StoreDecorator(HomePage, ArticleStore);

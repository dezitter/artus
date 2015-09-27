import React from 'react';

import PaginatedArticleListComponent from '../components/article/PaginatedList';
import ArticleStore from '../../alt/stores/Article';

class HomePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = ArticleStore.getState();
        this.onStoreChange = this.onStoreChange.bind(this);
    }

    componentDidMount() {
        ArticleStore.listen(this.onStoreChange);
    }

    componentWillUnmount() {
        ArticleStore.unlisten(this.onStoreChange);
    }

    render() {
        return (
            <div>
                <PaginatedArticleListComponent
                    limit={10}
                    articles={this.state.articles}
                />
            </div>
        );
    }

    onStoreChange() {
        this.setState( ArticleStore.getState() );
    }

}

export default HomePage;

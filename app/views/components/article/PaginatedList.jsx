import React from 'react';

import ListComponent from './List';
import PagerComponent from '../Pager';

import ArticleActions from '../../../alt/actions/Article';

class PaginatedList extends React.Component {

    getArticlesPage(page) {
        let start = (page - 1) * this.props.pager.limit;
        let end = page * this.props.pager.limit;

        return this.props.articles.slice(start, end);
    }

    render() {
        const articles = this.getArticlesPage(this.props.pager.current);
        const total = Math.ceil(this.props.articles.length / this.props.pager.limit);

        return (
            <div className="article-list-paginated">
                <ListComponent
                    articles={articles} />

                <PagerComponent
                    total={total}
                    current={this.props.pager.current}
                    handlePrevious={() => ArticleActions.updatePage(this.props.pager.current - 1)}
                    handleNext={() => ArticleActions.updatePage(this.props.pager.current + 1)} />
            </div>
        );
    }
}

export default PaginatedList;

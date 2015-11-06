import _ from 'lodash';
import React from 'react';

/* Components */
import InputComponent from '../../shared/Input';
import ListComponent from './List';
import PagerComponent from '../../shared/Pager';

/* Utils */
import { filterByTitle, filterByTags } from '../../../../util/filter/article';

/* Actions */
import ArticleActions from '../../../../alt/actions/Article';

function paginateArticles(articles, pager) {
    const start = (pager.current - 1) * pager.limit;
    const end = pager.current * pager.limit;

    return articles.slice(start, end);
}

function filterArticles(articles, text) {
    const byTitle = filterByTitle(articles, text);
    const byTags = filterByTags(articles, text);

    return _.union(byTitle, byTags);
}

class FilterablePaginatedList extends React.Component {

    render() {
        let articles = this.props.articles;
        articles = filterArticles(articles, this.props.filter.text);
        articles = paginateArticles(articles, this.props.pager);

        const inputComponent = this.renderInputFilter();
        const pagerComponent = this.renderPager(articles.length);

        return (
            <div className="article-list-paginated">
                {inputComponent}

                <ListComponent articles={articles} />

                {pagerComponent}
            </div>
        );
    }

    renderInputFilter() {
        return (
            <InputComponent
                placeholder="Search..."
                inputClassName="pure-input-1"
                value={this.props.filter.text}
                handleChange={this.handleFilterChange.bind(this)} />
        );
    }

    renderPager(size) {
        const pageTotal = Math.ceil(size / this.props.pager.limit);

        if (size !== 0) {
            return (
                <PagerComponent
                    total={pageTotal}
                    current={this.props.pager.current}
                    handlePrevious={this.handlePreviousPage.bind(this)}
                    handleNext={this.handlePreviousPage.bind(this)} />
            );
        }
    }

    handleFilterChange(text) {
        ArticleActions.filter(text);
    }

    handlePreviousPage() {
        ArticleActions.updatePage(this.props.pager.current - 1);
    }

    handleNextPage() {
        ArticleActions.updatePage(this.props.pager.current + 1);
    }

}

export default FilterablePaginatedList;

import React from 'react';

import ListComponent from './List';
import PagerComponent from '../Pager';
import SearchFormComponent from '../SearchForm';

import ArticleActions from '../../../alt/actions/Article';

class FilterablePaginatedList extends React.Component {

    filterArticles(articles) {
        const text = this.props.filter.text.toLowerCase();

        return articles.filter(a => {
            return a.title.toLowerCase()
                          .indexOf(text) !== -1;
        });
    }

    paginateArticles(articles) {
        const start = (this.props.pager.current - 1) * this.props.pager.limit;
        const end = this.props.pager.current * this.props.pager.limit;

        return articles.slice(start, end);
    }

    render() {
        const filteredArticles = this.filterArticles(this.props.articles);
        const paginatedArticles = this.paginateArticles(filteredArticles);

        const total = Math.ceil(filteredArticles.length / this.props.pager.limit);

        return (
            <div className="article-list-paginated">
                <SearchFormComponent
                    onChange={(text) => ArticleActions.filter(text)}
                    text={this.props.filter.text} />

                <ListComponent
                    articles={paginatedArticles} />

                {(() => {
                    if (paginatedArticles.length !== 0) {
                        return (
                            <PagerComponent
                                total={total}
                                current={this.props.pager.current}
                                handlePrevious={() => ArticleActions.updatePage(this.props.pager.current - 1)}
                                handleNext={() => ArticleActions.updatePage(this.props.pager.current + 1)} />
                        );
                    }
                })()}
            </div>
        );
    }
}

export default FilterablePaginatedList;

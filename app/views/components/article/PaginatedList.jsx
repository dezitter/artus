import React from 'react';

import ListComponent from './List';
import PagerComponent from '../Pager';

class PaginatedList extends React.Component {

    constructor(props) {
        super(props);

        this.state = { current: 1 };
        this.state.articles = this.getArticlesSlice(this.state.current);
    }

    getArticlesSlice(page) {
        let start = (page - 1) * this.props.limit;
        let end = page * this.props.limit;

        return this.props.articles.slice(start, end);
    }

    render() {
        let total = Math.ceil(this.props.articles.length / this.props.limit);

        return (
            <div>
                <ListComponent
                    articles={this.state.articles} />

                <PagerComponent
                    total={total}
                    current={this.state.current}
                    handlePrevious={() => this.update(this.state.current - 1)}
                    handleNext={() => this.update(this.state.current + 1)} />
            </div>
        );
    }

    update(page) {
        this.setState({
            current: page,
            articles: this.getArticlesSlice(page)
        });
    }
}

export default PaginatedList;

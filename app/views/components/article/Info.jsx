import React from 'react';

import { timeAgo } from '../../../util/format';

class Info extends React.Component {

    render() {
        let timeAgoStr = timeAgo( new Date(this.props.article.date_added) );

        return (
            <div className="article-info">
                <a href={this.props.article.url} className="article-link">
                    {this.props.article.domain || 'Original article'}
                </a>
                <span className="article-time-since-added">
                    {`(Added ${timeAgoStr})`}
                </span>
            </div>
        );
    }

}

export default Info;

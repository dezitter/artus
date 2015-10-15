import React from 'react';

import { timeAgo } from '../../../util/format';

import ArticleActions from '../../../alt/actions/Article';
import TagListComponent from '../TagList';

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
                <TagListComponent
                    tags={this.props.article.tags}
                    editing={this.props.article.tagging}
                    handleSubmit={this.handleTagsSubmit.bind(this)}/>
            </div>
        );
    }

    handleTagsSubmit(tags) {
        tags = tags.split(/ *, */)
                   .filter(tag => (tag !== ''));

        ArticleActions.setTags({
            tags,
            _id: this.props.article._id
        });
    }

}

export default Info;

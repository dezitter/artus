import React from 'react';

/* Components */
import TagListComponent from '../../../shared/TagList';

/* Utils */
import timeAgo from '../../../../../util/time/time-ago';

/* Actions */
import ArticleActions from '../../../../../alt/actions/Article';

class Info extends React.Component {

    render() {
        const urlLinkComponent = this.renderUrlLink();
        const timeAgoComponent = this.renderDateAdded();

        return (
            <div className="article-info">
                {urlLinkComponent}
                {timeAgoComponent}

                <TagListComponent
                    tags={this.props.article.tags}
                    editing={this.props.article.tagging}
                    handleSubmit={this.handleTagsSubmit.bind(this)}/>
            </div>
        );
    }

    renderUrlLink() {
        return (
            <a href={this.props.article.url} className="article-link">
                {this.props.article.domain || 'Original article'}
            </a>
        );
    }

    renderDateAdded() {
        let timeAgoStr = timeAgo( new Date(this.props.article.date_added) );

        return (
            <span className="article-time-since-added">
                {`(Added ${timeAgoStr})`}
            </span>
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

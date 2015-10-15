import React from 'react';

import ArticleActions from '../../../alt/actions/Article';

class ArticleTools extends React.Component {

    constructor(props) {
        super(props);

        this.onTag = this.onTag.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    render() {
        return (
            <div className="article-tools">
                <div
                    className="tool-button tag-button"
                    onClick={this.onTag} />
                <div
                    className="tool-button del-button"
                    onClick={this.onDelete} />
            </div>
        );
    }

    onTag() {
        ArticleActions.toggleTagging(this.props.article);
    }

    onDelete() {
        ArticleActions.del({ _id: this.props.article._id });
    }

}

export default ArticleTools;

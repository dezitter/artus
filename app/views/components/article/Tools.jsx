import React from 'react';

import ArticleActions from '../../../alt/actions/Article';

class ArticleTools extends React.Component {

    render() {
        return (
            <div className="article-tools">
                <div
                    className="del-button"
                    onClick={this.onDelete.bind(this)} />
            </div>
        );
    }

    onDelete() {
        ArticleActions.del({ _id: this.props.article._id });
    }

}

export default ArticleTools;

import React from 'react';

import ArticleActions from '../../../alt/actions/Article';

class ArticleTools extends React.Component {

    render() {
        return (
            <div className="article-tools">
                <button
                    type="button"
                    className="pure-button"
                    onClick={this.onDelete.bind(this)}>Delete</button>
            </div>
        );
    }

    onDelete() {
        ArticleActions.del({ _id: this.props.article._id });
    }

}

export default ArticleTools;

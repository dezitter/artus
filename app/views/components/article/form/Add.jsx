import React from 'react';

import ArticleActions from '../../../../alt/actions/Article';

class AddArticleForm extends React.Component {

    render() {
        return (
            <form className="pure-form" onSubmit={this.onSubmit.bind(this)}>
                <input type="text" ref="urlInput" placeholder="Url..." />
                <button type="submit" className="pure-button pure-button-primary">Add</button>
            </form>
        );
    }

    onSubmit(event) {
        event.preventDefault();
        const input = React.findDOMNode(this.refs.urlInput);
        const value = input.value.trim();

        if (value) {
            ArticleActions.add({
                url: value
            });
        }

        input.value = '';
    }

}

export default AddArticleForm;

import React from 'react';

class AddArticleForm extends React.Component {

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <input type="text" ref="urlInput" placeholder="Url..." />
                <button type="submit">Add</button>
            </form>
        );
    }

    onSubmit(event) {
        event.preventDefault();
        const input = React.findDOMNode(this.refs.urlInput);
        const value = input.value.trim();

        if (value) {
            this.props.handleAddArticle(value);
        }

        input.value = '';
    }

}

export default AddArticleForm;

import React from 'react';

import InputComponent from '../../Input';
import ArticleActions from '../../../../alt/actions/Article';

class AddArticleForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { url:'' };
    }

    render() {
        return (
            <InputComponent
                type="url"
                placeholder="Url..."
                value={this.state.url}
                formClassName="article-add-form"
                handleSubmit={this.onSubmit.bind(this)}>

                <button
                    type="submit"
                    className="pure-button pure-button-primary article-add-button">
                        Add
                </button>
            </InputComponent>
        );
    }

    onSubmit(url) {
        if (url) {
            ArticleActions.add({ url });
        }

        this.setState({ url: '' });
    }

}

export default AddArticleForm;

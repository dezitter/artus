import React from 'react';

/* Components */
import InputComponent from '../shared/Input';

/* Actions */
import ArticleActions from '../../../alt/actions/Article';

class AddArticleForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { url: '' };
    }

    render() {
        const addBtnClassName = 'pure-button pure-button-primary article-add-button';

        return (
            <InputComponent
                type="url"
                placeholder="Url..."
                value={this.state.url}
                formClassName="article-add-form"
                handleSubmit={this.onSubmit.bind(this)}>

                <button
                    type="submit"
                    className={addBtnClassName}> Add </button>

            </InputComponent>
        );
    }

    onSubmit(url) {
        if (url) {
            ArticleActions.add({ url })
                .then(() => { this.setState({ url: '' }); });
        }
    }

}

export default AddArticleForm;

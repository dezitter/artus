import React from 'react';

class SearchForm extends React.Component {

    render() {
        return (
            <form
                className="pure-form"
                onSubmit={this.onSubmit.bind(this)}>

                <input
                    type="text"
                    ref="searchInput"
                    value={this.props.text}
                    placeholder="Search..."
                    onChange={this.onChange.bind(this)}
                    className="pure-input-rounded pure-input-1" />

            </form>
        );
    }

    onSubmit(event) {
        event.preventDefault();
    }

    onChange(event) {
        const input = React.findDOMNode(this.refs.searchInput);
        const value = input.value.trim();

        this.props.onChange(value);
    }

}

export default SearchForm;

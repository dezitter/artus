import React from 'react';

class Input extends React.Component {

    constructor(props) {
        super(props);

        this.state = { value: this.props.value };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        const type = this.props.type || 'text';
        const formClassName = 'pure-form ' + (this.props.formClassName || '');
        const inputClassName  = 'pure-input-rounded ' + (this.props.inputClassName || '');

        return (
            <form
                className={formClassName}
                onSubmit={this.onSubmit}>

                <input
                    type={type}
                    ref="input"
                    className={inputClassName}
                    value={this.state.value}
                    placeholder={this.props.placeholder}
                    onChange={this.onChange}
                />

                {this.props.children}
            </form>
        );
    }

    componentWillReceiveProps(props) {
        this.setState({ value: props.value });
    }

    onChange() {
        const input = React.findDOMNode(this.refs.input);
        const value = input.value;

        this.setState({ value });

        if (this.props.handleChange) {
            this.props.handleChange(value);
        }
    }

    onSubmit(event) {
        event.preventDefault();

        if (this.props.handleSubmit) {
            this.props.handleSubmit(this.state.value);
        }
    }
}

export default Input;

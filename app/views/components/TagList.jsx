import React from 'react';

import InputComponent from './Input';

class TagList extends React.Component {

    static defaultProps = { tags: [] };

    render() {
        const tags = this.props.tags.join(', ');
        let content = tags;

        if (this.props.editing) {
            content = (
                <InputComponent
                    value={tags}
                    placeholder="comma-separated tags..."
                    handleSubmit={this.props.handleSubmit} />
            );
        }

        return ( <div>{content}</div>);
    }

}

export default TagList;

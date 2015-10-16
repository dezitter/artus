import React from 'react';

/* FIXME validate prop 'type' */
class Panel extends React.Component {

    render() {
        return (
            <div className={`panel ${this.props.type}`}>
                {this.props.message}
            </div>
        );
    }

}

export default Panel;

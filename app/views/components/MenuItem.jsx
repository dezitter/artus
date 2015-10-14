import React from 'react';

class MenuItem extends React.Component {

    render() {
        const itemClassName = `pure-menu-item ${this.props.isActive ? 'pure-menu-selected' : ''}`;

        return (
            <li className={itemClassName}>
                <a href={this.props.route}
                   className="pure-menu-link"
                   onClick={() => this.props.handleItemClick(this.props.route)}> {this.props.label} </a>
            </li>
        );
    }
}

export default MenuItem;

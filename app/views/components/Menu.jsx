import React from 'react';

class Menu extends React.Component {

    render() {
        const items = this.props.items.map(function(item) {
            return (
                <li className="pure-menu-item">
                    <a href={item.route} className="pure-menu-link"> {item.label} </a>
                </li>
            );
        });

        return (
            <div className="pure-menu pure-menu-horizontal">
                <span class="pure-menu-heading pure-menu-link">{this.props.title}</span>
                <ul className="pure-menu-list">{items}</ul>
            </div>
        );
    }

}

export default Menu;

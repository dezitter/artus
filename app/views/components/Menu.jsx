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
                <a href="#" className="pure-menu-heading pure-menu-link">{this.props.title}</a>
                <ul className="pure-menu-list">{items}</ul>
            </div>
        );
    }

}

export default Menu;

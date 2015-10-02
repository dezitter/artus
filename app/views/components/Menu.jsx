import React from 'react';

const MENU_ITEMS = [
    { route: '/'        , label: 'Home' },
    { route: '/articles', label: 'Articles' }
];

class MenuItem extends React.Component {

    render() {
        return (
            <li className="pure-menu-item">
                <a href={this.props.route}
                   className="pure-menu-link"> {this.props.label} </a>
            </li>
        );
    }
}

class Menu extends React.Component {

    render() {
        const items = this.renderMenuItems();

        return (
            <div className="pure-menu pure-menu-horizontal">
                <a href="#" className="pure-menu-heading pure-menu-link">{this.props.title}</a>
                <ul className="pure-menu-list">{items}</ul>
            </div>
        );
    }

    renderMenuItems() {
        return MENU_ITEMS.map( (item, key) => {
            return (
                <MenuItem
                    key={key}
                    route={item.route}
                    label={item.label}
                />
            );
        });
    }

}

export default Menu;

import React from 'react';

import MenuItem from './MenuItem';

const MENU_ITEMS = [
    { route: '/'        , label: 'Home' },
    { route: '/articles', label: 'Articles' }
];

class Menu extends React.Component {

    constructor(props) {
        super(props);

        this.state = { currentRoute: this.props.route };
        this.handleItemClick = this.handleItemClick.bind(this);
    }

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
            const isActive = (this.state.currentRoute === item.route);

            return (
                <MenuItem
                    key={key}
                    route={item.route}
                    label={item.label}
                    isActive={isActive}
                    handleItemClick={this.handleItemClick}
                />
            );
        });
    }

    handleItemClick(route) {
        this.setState({ currentRoute: route });
    }

}

export default Menu;

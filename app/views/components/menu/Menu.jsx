import React from 'react';

/* Components */
import MenuItem from './Item';

import Sections from './sections';

class Menu extends React.Component {

    constructor(props) {
        super(props);

        this.state = { currentRoute: this.props.route };
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    render() {
        const sections = this.renderMenuSections();

        return (
            <div id="menu" className="pure-menu pure-menu-horizontal">
                <a href="#" className="pure-menu-heading pure-menu-link">{this.props.title}</a>
                <ul className="pure-menu-list">{sections}</ul>
            </div>
        );
    }

    renderMenuSections() {
        return Sections.map((section, key) => {
            const isActive = (this.state.currentRoute === section.url);

            return (
                <MenuItem
                    key={key}
                    route={section.url}
                    label={section.name}
                    isActive={isActive}
                    handleItemClick={this.handleItemClick} />
            );
        });
    }

    handleItemClick(route) {
        this.setState({ currentRoute: route });
    }

}

export default Menu;

import React from 'react';

class Menu extends React.Component {

    render() {
        const items = this.props.items.map(function(item) {
            return (
                <li>
                    <a href={item.route}> {item.label} </a>
                </li>
            );
        });

        return (
            <ul>{items}</ul>
        );
    }

}

export default Menu;

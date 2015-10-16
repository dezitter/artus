import React from 'react';

import location from '../global/location';
import MenuComponent from '../../../views/components/menu/Menu';

export default function() {
    React.render(
        React.createElement(MenuComponent, {
            title: 'Artus',
            route: location.pathname
        }),
        document.getElementById('menu')
    );
}

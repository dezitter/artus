import React from 'react';

import router from '../../router';
import location from './global/location';
import { getAnchor, isSameOrigin, isLeftClick } from './util/anchor';

import MenuComponent from '../../views/components/Menu';

// bootstrap menu
React.render(
    React.createElement(MenuComponent, {
        title: 'Artus',
        route: location.pathname
    }),
    document.getElementById('menu')
);

// intercept anchor clicks and dispatch to router
document.addEventListener('click', function(event) {
    const anchor = getAnchor(event.target);

    if (anchor && isSameOrigin(anchor) && isLeftClick(event)) {
        const href = anchor.attributes.href.value;

        event.preventDefault();
        router.setRoute(href);
    }
});

router.configure({ html5history: true });
router.init();

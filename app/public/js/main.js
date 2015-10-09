import router from '../../router';
import bootstrapStore from './bootstrap/store';
import bootstrapMenu from './bootstrap/menu';
import { getAnchor, isSameOrigin, isLeftClick } from './util/anchor';

bootstrapStore();
bootstrapMenu();

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

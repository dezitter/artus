import origin from './origin';
import router from '../../router';

const LEFT_BUTTON = 1;

function getAnchor(el) {
    while (el) {
        if (el.nodeName === 'A') {
            return el;
        }

        el = el.parentElement;
    }
}

function isLeftClick(event) {
    return event.which === LEFT_BUTTON
    &&     !event.ctrlKey
    &&     !event.metaKey
    &&     !event.shiftKey;
}

function isSameOrigin(anchor) {
    return (anchor.origin === origin);
}

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

import origin from './origin';

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

export { getAnchor, isLeftClick, isSameOrigin };

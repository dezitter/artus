import router from '../../router';

// intercept anchor clicks and dispatch to router
document.addEventListener('click', function(event) {
    if (event.target.nodeName === 'A') {
        event.preventDefault();

        let anchor = event.target;
        let route = anchor.attributes.href.value;

        router.setRoute(route);
    }
});

router.configure({ html5history: true });
router.init();

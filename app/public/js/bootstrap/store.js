import alt from '../../../alt';

export default function() {
    const storeEl = document.querySelector('script[type="text/snapshot"]');
    const snapshot = storeEl.innerHTML;

    alt.bootstrap(snapshot);
    storeEl.remove();
}

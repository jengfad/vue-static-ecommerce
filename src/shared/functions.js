/* eslint-disable no-undef */
export function showCardBack() {
    if ( ! apicart.cart.manager.getCart().items.length) {
        return;
    }

    togglePerspective();
    document.querySelector('.flip-card').classList.add('show-card-back');
}


export function showCardFront() {
    togglePerspective();
    document.querySelector('.flip-card').classList.remove('show-card-back');
}


export function togglePerspective() {
    document.querySelector('.flip-card').classList.add('with-perspective');

    setTimeout(function () {
        document.querySelector('.flip-card').classList.remove('with-perspective');
    }, 700);
}
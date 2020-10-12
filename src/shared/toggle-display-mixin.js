/* eslint-disable no-undef */
export default {
    methods: {
        showCardBack() {
            if ( ! apicart.cart.manager.getCart().items.length) {
                return;
            }
        
            this.togglePerspective();
            document.querySelector('.flip-card').classList.add('show-card-back');
        },
        showCardFront() {
            this.togglePerspective();
            document.querySelector('.flip-card').classList.remove('show-card-back');
        },
        togglePerspective() {
            document.querySelector('.flip-card').classList.add('with-perspective');
        
            setTimeout(function () {
                document.querySelector('.flip-card').classList.remove('with-perspective');
            }, 700);
        }
    }
}
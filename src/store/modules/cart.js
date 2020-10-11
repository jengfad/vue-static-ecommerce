/* eslint-disable no-undef */
export default {
    namespaced: true,
    state: {
        itemsPrice: apicart.cart.manager.getItemsPrice(),
        itemsCount: apicart.cart.manager.getItemsCount(),
        items: apicart.cart.manager.getCart().items
    },
    mutations: {
        updateItemsPrice(state, payload) {
            state.itemsPrice = payload;
        },
        updateItemsCount(state, payload) {
            state.itemsCount = payload; 
        },
        updateItems(state, payload) {
            state.items = payload;
        }
    }
}
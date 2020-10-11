export default {
    namespaced: true,
    state: {
        selectedPainting: 'painting1'
    },
    mutations: {
        selectPainting(state, payload) {
            state.selectedPainting = payload;
        }
    },
    actions: {
        selectPainting({ commit }, payload) {
            commit('selectPainting', payload);
        }
    }
}
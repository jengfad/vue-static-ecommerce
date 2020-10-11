import Vue from 'vue';
import Vuex from 'vuex';

import paintingsModule from './modules/paintings';
import cartModule from './modules/cart';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  modules: {
    paintings: paintingsModule,
    cart: cartModule
  },
  getters: {
  },
});

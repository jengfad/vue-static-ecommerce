import Vue from 'vue';
import Vuex from 'vuex';

import paintingsModule from './modules/paintings';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  modules: {
    paintings: paintingsModule,
  },
  getters: {
  },
});

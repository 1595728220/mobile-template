import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
      reducer(state) {
        return {
          // test
          test: state.count
        };
      }
    })
  ],
  state: {
    count: 1
  },
  mutations: {
    updateCount(state) {
      state.count++;
    }
  },
  actions: {},
  modules: {}
});

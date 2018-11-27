import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    data: [
      { id: 1, msg: 'hello' },
      { id: 2, msg: 'yo' },
      { id: 3, msg: 'hi' },
      { id: 4, msg: 'howdy' },
      { id: 5, msg: 'cheers' }
    ],
    selections: []
  },
  getters: {
    dataCount: state => {
      return state.data.length;
    }
  },
  mutations: {
    ADD_SELECTED_ITEM: (state, payload) => {
      state.selections = state.selections.concat(payload);
    }
  },
  actions: {
    addSelectedItem: ({ commit }, payload) => {
      commit('ADD_SELECTED_ITEM', payload);
    }
  }
});

export default store;

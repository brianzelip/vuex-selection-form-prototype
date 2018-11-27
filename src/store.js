import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = {
  state: {
    data: [
      { id: 1, msg: 'hello' },
      { id: 2, msg: 'yo' },
      { id: 3, msg: 'hi' },
      { id: 4, msg: 'howdy' },
      { id: 5, msg: 'cheers' }
    ]
  },
  getters: {
    data: state => state.data
  },
  mutations: {
    ADD_DATA_ITEM: (state, payload) => {
      state.data = {
        ...state.data,
        '`${payload.id}`': payload
      };
    }
  },
  actions: {
    addDataItem: ({ commit }, payload) => {
      commit('ADD_DATA_ITEM', payload);
    }
  }
};

export default store;

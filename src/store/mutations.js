import Vue from 'vue';

export const ADD_SELECTED_ITEM = (state, payload) => {
  // payload is an item object
  state.selections = { ...state.selections, [payload.msg]: payload };
};

export const REMOVE_SELECTED_ITEM = (state, payload) => {
  // payload is a msg string
  Vue.delete(state.selections, payload);
};

export const UPDATE_QTY = (state, payload) => {
  // payload is an object like { id: 'id', qty: 1 }
  state.selections[payload.msg].qty = payload.qty;
};

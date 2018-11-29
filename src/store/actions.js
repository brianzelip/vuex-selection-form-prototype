export const addSelectedItem = ({ commit }, payload) => {
  commit('ADD_SELECTED_ITEM', payload);
};

export const removeSelectedItem = ({ commit }, payload) => {
  commit('REMOVE_SELECTED_ITEM', payload);
};

export const updateQty = ({ commit }, payload) => {
  commit('UPDATE_QTY', payload);
};

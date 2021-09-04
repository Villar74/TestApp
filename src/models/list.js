import api from '../api';

/**
 * Модель списка, реализован функционал загрузки и записи списка в стор
 * @type {{effects: (function(*): {loadList(*, *): Promise<void>}), reducers: {setList(*, *=): *&{list: *}}, state: {list: *[]}}}
 */
export const list = {
  // initial state
  state: {
    list: [],
  },
  reducers: {
    setList(state, payload) {
      return {
        ...state,
        list: payload,
      };
    },
  },
  effects: dispatch => ({
    // handle state changes with impure functions.
    async loadList(payload, rootState) {
      const loadedList = await api.getList();
      this.setList(loadedList.data);
    },
  }),
};

import { createStore } from 'vuex';
import { auth } from "./auth.module";

export default createStore({
  state: {
    eyeActive: null,
    filterMenu: null,
    filteredData: null
  },
  getters: {
  },
  mutations: {
    TOGGLE_EYE(state) {
      state.eyeActive = !state.eyeActive;
    },
    TOGGLE_FILTER_MENU(state) {
      state.filterMenu = !state.filterMenu;
    }
  },
  actions: {
  },
  modules: {
    auth,
  }
})

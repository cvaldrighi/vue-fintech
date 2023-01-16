import { createStore } from 'vuex';
import { auth } from "./auth.module";

export default createStore({
  state: {
    eyeActive: null,
  },
  getters: {
  },
  mutations: {
    TOGGLE_EYE(state) {
      state.eyeActive = !state.eyeActive;
    }
  },
  actions: {
  },
  modules: {
    auth,
  }
})

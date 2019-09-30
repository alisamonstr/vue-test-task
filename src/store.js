import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    x: 50,
    y: 50,
  },
  mutations: {
    moveTop (state) {
      state.y += 10
    },
    moveDown (state) {
      state.y -= 10
    },
    moveRight (state) {
      state.x += 10
    },
    moveLeft (state) {
      state.x -= 10
    },
  }
})
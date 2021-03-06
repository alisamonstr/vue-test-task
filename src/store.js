import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    x: 250,
    y: 250,
  },
  mutations: {
    moveUp(state) {
      if (state.y >= 50) {
        state.y -= 25
      }
    },
    moveDown(state) {
      if (state.y <= 450) {
        state.y += 25
      }
    },
    moveRight(state) {
      if ( state.x <= 450) {
        state.x += 25
      }
    },
    moveLeft(state) {
      if (state.x >= 50) {
        state.x -= 25
      }
    },
  }
})
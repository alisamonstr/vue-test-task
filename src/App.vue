<template>
  <div id="app">
    <Scene>
    </Scene>
    <Keyboard msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
  import Scene from './components/scene.vue'
  import Keyboard from './components/keyboard.vue'

  export default {

    name: 'app',
    components: {
      Scene,
      Keyboard
    },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    display: flex;
  }
</style>

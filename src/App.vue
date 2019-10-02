<template>
  <div id="app">
    <Scene>
    </Scene>
    <Keyboard/>
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

<style scoped lang="scss">
  #app {
    display: flex;
    text-align: center;
    margin-top: 60px;
    color: #2c3e50;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>

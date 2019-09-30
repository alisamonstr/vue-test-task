import Figure from './components/figure.vue'

<template>
  <div class="scene">
    <Figure/>
  </div>
</template>

<script>
  import Figure from "./figure";

  export default {
    name: 'Scene',
    components: {Figure},
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .scene {
    width: 500px;
    height: 500px;
    border: solid rosybrown;
    border-width: 2px 0 2px 2px;
    box-sizing: border-box;
  }
</style>

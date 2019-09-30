<template>
  <div class="figure" :style="style">

  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'Figure',
    computed: mapState({
      style: state => `top: ${state.y}%; left: ${state.x}%;`
    })
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .figure {
    position: relative;
    width: 50px;
    height: 50px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: lavender;
    border: cadetblue 1px solid;
    box-sizing: border-box;
  }
</style>

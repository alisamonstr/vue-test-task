<template>
  <div class="keyboard">
    <div class="row">
      <div class="button">
        🡹
      </div>
    </div>
    <div class="row">
      <div class="button">
        🡸
      </div>
      <div class="button">
        🡻
      </div>
      <div class="button">
        🡺
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Keyboard',
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .keyboard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 500px;
    border: solid rosybrown;
    box-sizing: border-box;
  }

  .row {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    margin: 5px;
    background: mistyrose;
    border: hotpink 1px solid;
    font-size: 20px;
    color: dimgrey;
  }
</style>

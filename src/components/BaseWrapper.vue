<template>
  <div class="wrapper">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'BaseWrapper'
}
</script>

<style>
  .wrapper {
    background-color: white;
    height: 300px;
    width: 800px;
    margin: 0 auto;
    z-index: 1;
    border-radius: 5px;
  }
</style>

<template>
    <button
    @click="onClick"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'BaseBUtton',
  methods: {
    onClick (event) {
      if (!this.disabled) {
        this.$emit('click', event)
      }
    }
  }
}
</script>

<style>

</style>

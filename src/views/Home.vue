<template>
  <div class="home">
    <BaseWrapper>

    </BaseWrapper>
  </div>
</template>

<script>
// @ is an alias to /src
import BaseWrapper from '@/components/BaseWrapper.vue'

export default {
  name: 'Home',
  components: {
    BaseWrapper
  }
}
</script>

<style>
  .home {
    background-color: green;
  }
</style>

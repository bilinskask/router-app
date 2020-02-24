<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><i class="fab fa-keybase"></i></router-link>
      <router-link to="/cart"><i class="fas fa-cart-arrow-down"></i></router-link>
      <router-link to="/menu"><i class="fas fa-bars"></i></router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
// import axios from '@/packages/axios'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {

  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      isLoading: 'isLoading'
    })
  },
  created () {
    this.loadProductData()
  },
  methods: {
    ...mapActions({
      changeGameState: 'changeGameState',
      loadProductData: 'loadProductData'
    })
  }
}
</script>

<style lang="scss">

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  grid-gap: 5px;
  justify-content: center;
  align-content: center;
  height: 50px;
  background-color: #3252e5;
  text-align: center;

  a {
    font-weight: bold;
    font-size: 20px;
    color: white;

    &.router-link-exact-active {
      color: #353535;
    }
  }
}

</style>

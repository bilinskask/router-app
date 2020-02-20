<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Namai</router-link>
      <router-link to="/about">Apie mane</router-link>
      <router-link to="/about">Kontaktai</router-link>
    </div>
    <router-view/>
    <div id="footer">
      Kestutis Bilinskas
    </div>
  </div>
</template>

<style lang="scss">

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  height: 200px;
  background-color: #3252e5;

  a {
    font-weight: bold;
    font-size: 16px;
    color: white;

    &.router-link-exact-active {
      color: #353535;
    }
  }
}

#footer {
  background-color: red;
}
</style>

<template>
  <div>
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: { NavBar },
};
</script>

<style>
body {
  background-image: url('../src/assets/star-wars-backgrounds-25.jpeg');
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFFF00;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #FFFF00;
}

nav a.router-link-exact-active {
  color: #FFFF00;
}
</style>

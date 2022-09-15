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
button {
  color: #FFFF00;
  text-decoration: none;
  background: transparent;
  border: 1px solid rgb(255, 255, 0);
  position: relative;
  overflow: hidden;
  margin-left: 10px;
}
button:hover {
  box-shadow: 1px 1px 8px 8px rgba(255, 255, 0, 0.3);
}
button:before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255, 255, 0, 0.3), transparent);
  transition: all 650ms;
}
button:hover:before {
  left: 100%;
}
</style>

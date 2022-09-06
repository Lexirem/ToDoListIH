<template>
  <div>
    <nav v-if="user !== null">
      <router-link to="/">Home</router-link> |
      <router-link to="/auth" @click="signOut">Sign Out</router-link> |
    </nav>
    <router-view />
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'App',
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['fetchUser', 'signOut']),
  },
  async created() {
    try {
      await this.fetchUser();
      console.log(this.user);
      if (!this.user) {
        this.$router.push({ path: '/auth' });
      } else {
        this.$router.push({ path: '/' });
      }
    } catch (e) {
      console.error(e);
    }
  },
  signOut() {
    this.user = !this.user;
    console.log('usuario desconectado');
  },
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
  color: #fff;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #fff;
}

nav a.router-link-exact-active {
  color: red;
}
</style>

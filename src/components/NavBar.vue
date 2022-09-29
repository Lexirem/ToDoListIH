<template>
  <div>
    <nav v-if="user !== null">
      <router-link to="/">Home</router-link>
      <button @click="signOut">Sign Out</button>
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'NavBar',
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['fetchUser', 'signOut']),
  },
  async created() {
    try {
      await this.fetchUser();
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style>
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

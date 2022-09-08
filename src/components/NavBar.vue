<template>
  <div>
    <nav v-if="user !== null">
      <router-link to="/">Home</router-link> |
      <button @click="signOut">Sign Out</button> |
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
      console.log(this.user);
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style>

</style>

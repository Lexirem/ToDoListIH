<template>
  <div class="auth">
    <h2><b>Sign In</b></h2>
    <form class="form" method="post">
      <label for="email">Email:
        <input type="email" name="email" id="email" v-model="email" placeholder="Your email">
      </label>
      <label for="password">Password:
        <input type="password" name="password" v-model="password" placeholder="********">
      </label>
    </form>
    <button @click.prevent="handleSignIn">Sign In</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'singIn',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signIn']),
    handleSignIn() {
      this.signIn(this.email, this.password);
    },
  },
};
</script>

<style>
.auth {
  border: 1px solid black;
  border-radius: 15%;
  width: 400px;
  height: 200px;
  margin-left: 360px;
  padding-bottom: 30px;
}
.form {
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  gap: 10px;
}
</style>

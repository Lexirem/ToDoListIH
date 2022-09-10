<template>
  <div class="auth">
    <h2><b>Sign In</b></h2>
    <form class="form" method="post">
      <label for="email">Email:
        <input type="email" name="email" id="email" placeholder="Your email">
      </label>
      <label for="password">Password:
        <input type="password" name="password" placeholder="********">
      </label>
    </form>
    <button @click="handleSignIn">Sign In</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'singIn',
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signIn']),
    handleSignIn() {
      const userData = {
        email: 'me.vallribera@gmail.com',
        password: 'pruebasignup',
      };
      this.signIn(userData.email, userData.password);
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

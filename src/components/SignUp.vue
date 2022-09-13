<template>
  <div class="auth">
    <h2><b>Sign Up</b></h2>
    <form class="form" method="post" @submit.prevent="handleSignUp">
      <label for="email">Email:
        <input type="email" v-model="email" placeholder="Your email">
      </label>
      <label for="password">Password:
        <input type="password" v-model="password" placeholder="********">
      </label>
      <label for="password">Confirm your Password:
        <input type="password" v-model="confirmPassword" placeholder="********">
      </label>
      <div v-if="passwordError">{{ passwordError }}</div>
      <button @click.prevent="goToSignIn">Already a user? Sign In</button>
      <button @click.prevent="handleSignUp">Sign Up</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'signUp',
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
    };
  },
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signUp']),
    handleSignUp() {
      this.signUp(this.email, this.password, this.confirmPassword);
      this.confirmPassword === this.password;
      this.passwordError = this.password.length > 6 ? '' : 'Password should have more than 6 characters';
      if (!this.passwordError) {
        console.log(this.email);
        console.log(this.password);
      }
    },
    goToSignIn() {
      this.$emit('modifyChangeForm', 'signIn');
    },
  },
};
</script>

<style>
.auth {
  border: 1px solid #fff;
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

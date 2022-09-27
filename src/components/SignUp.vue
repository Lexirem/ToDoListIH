<template>
  <div class="auth">
    <h2><b>Sign Up</b></h2>
    <form class="form" method="post" @submit.prevent="handleSignUp">
      <label for="email">Email:
        <input type="email" v-model="email" placeholder="Your email" required>
      </label>
      <label for="password">Password:
        <input type="password" v-model="password" placeholder="********" required>
      </label>
      <label for="password">Confirm your Password:
        <input type="password" v-model="confirmPassword" placeholder="********" required>
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
      passwordError: null,
    };
  },
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signUp']),
    handleSignUp() {
      const validateEmail = (email) => String(email)
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

      if (!validateEmail(this.email)) {
        alert('Enter a validate Email');
        return;
      }

      if (this.confirmPassword !== this.password) {
        alert('Please, confirm the password');
        return;
      }

      this.passwordError = this.password.length < 6 ? 'Password should have more than 6 characters' : null;

      if (this.passwordError === null) {
        this.signUp(this.email, this.password);
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
  /* border: 1px solid #FFFF00;
  border-radius: 15%; */
  width: 400px;
  height: 250px;
  padding: 20px 30px 60px 30px;
}
.form {
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  gap: 20px;
  margin-bottom: 15px;
}
</style>

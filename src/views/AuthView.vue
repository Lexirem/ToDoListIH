<template>
  <div>
    <h1>Esta es la pagina de SignUp-SingIn</h1>
    <SignUp v-if=" changeForm == 'signUp' " @modifyChangeForm="modifyForm" />
    <SignIn v-if=" changeForm == 'signIn' "/>
    <button @click="handleSignUp">Sign Up</button>
    <!-- <button @click="handleSignIn">Sign In</button> -->
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';
import SignUp from '../components/SignUp.vue';
import SignIn from '../components/SignIn.vue';

export default {
  name: 'AuthView',
  data() {
    return {
      changeForm: 'signUp',
    };
  },
  components: {
    SignUp,
    SignIn,
  },
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signUp', 'signIn']),
    handleSignUp() {
      const userData = {
        email: this.emailValue,
        password: this.passwordValue,
      };
      this.passwordError = this.password.length > 6 ? '' : 'Password should have more than 6 characters';
      if (!this.passwordError) {
        console.log(this.emailValue);
        console.log(this.passwordValue);
      }
      this.signUp(userData.email, userData.password);
    },
    handleSignIn() {
      const userData = {
        email: 'me.vallribera@gmail.com',
        password: 'pruebasignup',
      };
      this.signIn(userData.email, userData.password);
    },
    modifyForm(value) {
      this.changeForm = value;
      console.log(value);
    },
  },
};
</script>

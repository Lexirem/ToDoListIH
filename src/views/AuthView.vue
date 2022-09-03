<template>
  <div>
    <h1>Esta es la pagina de SignUp-SingIn</h1>
    <SignUp />
    <!-- <SingIn /> -->
    <button @click="handleSignUp">Sign Up</button>
    <button @click="handleSignIn">Sign In</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';
import SignUp from '../components/SignUp.vue';
// import SignIn from '../components/SignIn.vue';

export default {
  name: 'AuthView',
  components: {
    SignUp,
    // SignIn,
  },
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signUp', 'signIn']),
    handleSignUp() {
      const userData = {
        email: 'me.vallribera@gmail.com',
        password: 'pruebasignup',
      };
      this.signUp(userData.email, userData.password);
    },
    handleSignIn() {
      const userData = {
        email: 'me.vallribera@gmail.com',
        password: 'pruebasignup',
      };
      this.signIn(userData.email, userData.password);
    },
  },
  watch: {
    user() {
      if (this.user) {
        console.log(this.user);
        this.$router.push({ path: '/' });
      }
    },
  },
};
</script>

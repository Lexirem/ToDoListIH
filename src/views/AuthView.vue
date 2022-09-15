<template>
  <div>
    <h1>Esta es la pagina de SignUp-SingIn</h1>
    <SignUp v-if=" changeForm == 'signUp' " @modifyChangeForm="modifyForm" />
    <SignIn v-if=" changeForm == 'signIn' "/>
  </div>
</template>

<script>
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
  methods: {
    modifyForm(value) {
      this.changeForm = value;
      console.log(value);
    },
  },
};
</script>

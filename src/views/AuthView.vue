<template>
  <div class="authView">
    <h1>Welcome Force User...</h1>
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
    },
  },
};
</script>

<style>
.authView {
  color: #FFFF00;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 100px;
}
</style>

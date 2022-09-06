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
        <input type="password" v-model="password" placeholder="********">
      </label>
      <div v-if="passwordError">{{ passwordError }}</div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'signUp',
  data() {
    return {
      email: '',
      password: '',
    };
  },
};
</script>

<style>
.auth {
  border: 1px solid black;
  border-radius: 15%;
  width: 400px;
  height: 200px;
  /* justify-content: center; */
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

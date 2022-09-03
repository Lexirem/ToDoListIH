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
  </div>
</template>

<script>
export default {
  name: 'singIn',
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

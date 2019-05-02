<template>
  <div>
    <h5>Fill out these lines to create an account</h5>
    <input type="text" placeholder="Email">
    <br>
    <input type="password" placeholder="Password">
    <br>
    <b-button class="btn-danger">Sign Up</b-button>
    <br>
    <p>
      You have an account?
      <router-link to="/log-in">
        <a>Log In</a>
      </router-link>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
input {
  min-width: 250px;
  min-height: 50px;
  margin: 20px 0 10px 0;
  padding-left: 10px;
}
p {
    margin-top: 10px;
}
</style>

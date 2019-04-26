<template>
  <div class="container">
    <b-row>
      <b-col md="4">
        <router-link to="/" tag="button" class="btn btn-primary">Go To Home</router-link>
      </b-col>
      <b-col md="4">
        <h1>The User Page</h1>
      </b-col>
    </b-row>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>


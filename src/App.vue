<template>
  <div>
    <router-view name="header"></router-view>
    <br>
    <div class="container">
      <router-view></router-view>
    </div>
    <br>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
body {
  background-color: #eeeeee;
}
</style>

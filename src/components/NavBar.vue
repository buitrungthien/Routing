<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav class="container">
      <b-navbar-nav>
        <router-link to="/" tag="b-nav-item" active-class="isActive" exact>
          <span>Home</span>
        </router-link>
        <router-link to="/form" tag="b-nav-item" active-class="isActive">
          <span>Form</span>
        </router-link>
        <router-link to="/table" tag="b-nav-item" active-class="isActive">
          <span>Table</span>
        </router-link>
        <router-link to="/user" tag="b-nav-item" active-class="isActive">
          <span>User</span>
        </router-link>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item>EN</b-dropdown-item>
          <b-dropdown-item>ES</b-dropdown-item>
          <b-dropdown-item>RU</b-dropdown-item>
          <b-dropdown-item>FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template slot="button-content">
            <em>User</em>
          </template>
          <b-dropdown-item>Profile</b-dropdown-item>
          <b-dropdown-item @click="logOut">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      isLoggedIn: false,
      user: ""
    };
  },
  methods: {
    logOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("log-in");
        });
    }
  }
};
</script>

<style scoped>
.fnt-20 {
  font-size: 20px;
}
.isActive span {
  color: orange;
  border-bottom: solid;
  font-size: 20px;
}
</style>

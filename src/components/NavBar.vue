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
        <span class="user">{{user}}</span>
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
      user: ""
    };
  },
  created() {
    if (firebase.auth().currentUser) {
      this.user = firebase.auth().currentUser.email;
    }
  },
  methods: {
    logOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("/log-in");
        });
    }
  }
};
</script>

<style scoped>
@media screen and (min-width: 900px) {
  .user {
    padding-top: 8px;
    padding-right: 15px;
  }
}
.user {
    color: whitesmoke;
    font-style: italic;
  }
.fnt-20 {
  font-size: 20px;
}
.isActive span {
  color: orange;
  border-bottom: solid;
  font-size: 20px;
}
</style>

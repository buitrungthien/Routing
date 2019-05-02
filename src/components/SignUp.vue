<template>
  <div>
    <h5>Fill out these lines to create an account</h5>
    <input type="text" placeholder="Email" v-model="email">
    <br>
    <input type="password" placeholder="Password" v-model="password">
    <br>
    <b-button class="btn-danger" @click="register">Sign Up</b-button>
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
import firebase from "firebase";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    register(event) {
      event.preventDefault();
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert(`Account for ${user.user.email} created`);
            this.$router.replace("/");
          },
          err => {
            alert(err.message);
          }
        );
    }
  }
};
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

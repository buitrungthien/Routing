<template>
  <div>
    <h2>Sign In</h2>
    <input type="text" placeholder="Email" v-model="email">
    <br>
    <input type="password" placeholder="Password" v-model="password">
    <br>
    <b-button class="btn-success" @click="logIn">Log In</b-button>
    <br>
    <p>
      You have not an account yet? Please
      <router-link to="/sign-up">
        <a>register</a>
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
    logIn(event) {
      event.preventDefault();
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert(`You are logged in as ${user.user.email}`);
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
  margin-top: 20px;
}
</style>


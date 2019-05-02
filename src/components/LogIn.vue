<template>
    <div>
        <h2>Sign In</h2>
        <input type="text" placeholder="Email">
        <br>
        <input type="password" placeholder="Password">
        <br>
        <b-button class="btn-success">Log In</b-button>
        <br>
        <p>You have not an account yet? Please <router-link to="/sign-up"><a>register</a></router-link></p>
    </div>
</template>

<script>
export default {
    
}
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


<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const username = ref("");
const password = ref("");
const error = ref(false);
const login = () => {
  if (username.value === "tmdb" && password.value === "movies") {
    router.push("./purchase");
  } else {
    error.value = true;
  }
};
</script>

<template>
  <div class="home-container">
    <h1>FreeMovies4U</h1>
    <h3>Login</h3>
    <form @submit.prevent="login()">
      <input class="login" type="text" placeholder="Username" v-model="username" />
      <input class="login" type="password" placeholder="Password" v-model="password" />
      <input class="login" type="submit" value="Login" />
    </form>
    <div v-if="error">
      <p>Incorrect Username/Password!</p>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: #E8F5E9;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
}

.home-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2rem;
    color: #333;
}

h1 {
    grid-area: 1 / 1 / 2 / 3;
    align-self: center;
    justify-self: center;
    margin: 0;
    padding: 20px;
    font-size: 3rem;
    text-align: center;
    color: #0077C9;
    text-shadow: 2px 2px 5px #ccc;
}

form {
    grid-area: 2 / 1 / 3 / 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

input[type="text"], input[type="password"] {
    margin: 20px 0;
    padding: 20px;
    font-size: 1.2rem;
    width: 60%;
    border-radius: 8px;
    border: none;
    background-color: #f0f0f0;
    box-shadow: 2px 2px 5px #ccc;
    color: #333;
}

input[type="text"] {
    border-bottom: 2px solid #0077C9;
}

input[type="password"] {
    border-bottom: 2px solid #0077C9;
}

.login {
    margin-top: 20px;
    background-color: #0077C9;
    color: #fff;
    font-size: 1.2rem;
    text-align: center;
    border-radius: 8px;
    padding: 12px 20px;
    width: 40%;
    cursor: pointer;
    transition: all 0.2s ease;
}

.login:hover {
    background-color: #035f93;
}

</style>
<script setup>
import { ref } from "vue";
import router from "../router";
import { auth } from "../firebase/index";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";

const username = ref("");
const password = ref("");
const error = ref(false);

const signInByGoogle = async () => {
  error.value = false;
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    router.push("./purchase");
  } catch (loginError) {
    error.value = true;
  }
};

const signInWithEmail = async () => {
  error.value = false;
  if (!username.value || !password.value) {
    return;
  }
  try {
    await signInWithEmailAndPassword(auth, username.value, password.value);
    router.push("/purchase");
  } catch (loginError) {
    error.value = true;
  }
};
</script>
<template>
  <h1>FreeMovies4U</h1>
  <div class="home-container">
    <div class="container1">
      <h2>Login by Google</h2>
      <button class="login google-button" @click="signInByGoogle()">Google</button>
    </div>
    <div class="container1">
      <h2>Login by Email</h2>
      <form @submit.prevent="signInWithEmail()">
        <input class="login" type="text" placeholder="Username" v-model="username" />
        <input class="login" type="password" placeholder="Password" v-model="password" />
        <input class="login" type="submit" value="Login" />
      </form>
      <div v-if="error">
        <p>Incorrect Username or Password. Please try again.</p>
      </div>
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

input[type="text"],
input[type="password"] {
  margin: 20px;
  padding: 20px;
  font-size: 1.2rem;
  width: 60%;
  border-radius: 8px;
  border: none;
  background-color: #f0f0f0;
  box-shadow: 2px 2px 5px #ccc;
  color: #333;
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

.google-button {
  margin-top: 20px;
  background-color: #4285F4;
  color: #fff;
  font-size: 1.2rem;
  text-align: center;
  border-radius: 8px;
  padding: 12px 20px;
  width: 40%;
  cursor: pointer;
  transition: all 0.2s ease;
}
</style>
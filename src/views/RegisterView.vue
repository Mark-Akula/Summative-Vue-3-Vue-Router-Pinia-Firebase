<script setup>
import { ref } from "vue";
import router from "../router";
import { auth } from "../firebase/index";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const username = ref("");
const email = ref("");
const password1 = ref("");
const password2 = ref("");
const passwordsMatch = ref(false);
const isFormValid = ref(false);

const registerUserByEmail = async () => {
  if (password1.value !== password2.value) {
    passwordsMatch.value = true;
    return;
  } else {
    passwordsMatch.value = false;
  }
  if (!username.value || !email.value || !password1.value || !password2.value) {
    isFormValid.value = false;
    return;
  }
  isFormValid.value = true;
  router.push("/purchase");
  try {
    await createUserWithEmailAndPassword(auth, email.value, password1.value);
  } catch (error) {
    console.log(error);
  }
};

const registerUserByGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    router.push("./purchase");
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="registercontainer">
    <div class="container2">
      <h2>Register by Google</h2>
      <button @click="registerUserByGoogle">Google</button>
    </div>
    <div class="container2">
      <h2>Register by email</h2>
      <form @submit.prevent="registerUserByEmail()">
        <input v-model="username" type="text" placeholder="username" />
        <input v-model="email" type="email" placeholder="email" />
        <input v-model="password1" type="password" placeholder="password" />
        <input v-model="password2" type="password" placeholder="re-enter password" />
        <input type="submit" value="Register" />
      </form>
      <div class="error-message" v-if="passwordsMatch">
        <p>The passwords that were provided do not match!</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.register-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.inner-container {
  width: 50%;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
}

input {
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 5px;
  border: none;
  font-size: 1rem;
}

button {
  width: 10%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 5px;
  border: none;
  background-color: #0077C9;
  color: white;
  font-size: 1rem;
  transition: background-color 0.3s ease, font-size 0.2s ease, border-radius 0.2s ease;
}

button:hover {
  background-color: #0059b3;
  font-size: 1.2rem;
  border-radius: 20px;
  cursor: pointer;
}

form {
  margin: 20px auto;
  background: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
  box-shadow: 2px 2px 5px #ccc;
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  border-radius: 8px;
  padding: 12px 20px;
  width: 40%;
  cursor: pointer;
  transition: all 0.2s ease;
  color: white;
  font-family: 'Montserrat', sans-serif;
}

h2 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
  text-shadow: 1px 1px #ccc;
  font-weight: bold;
}

input[type="submit"] {
  background-color: #0077C9;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  padding: 12px 20px;
  border-radius: 10rem;
  border-color: black;
  cursor: pointer;
  transition: all 0.3s ease;
}

input[type="submit"]:hover {
  background-color: blue;
  border-color: blue;
}
.error-message {
  padding: 1em;
  margin-top: 1em;
  color: #ff0000;
  text-align: center;
  background-color: #fff0f0;
  border-radius: 4px;
}
</style>
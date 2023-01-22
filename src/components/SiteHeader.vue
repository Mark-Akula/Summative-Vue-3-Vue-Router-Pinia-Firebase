<script setup></script>

<template>
  <div class="main">
    <div class="header">
      <h1>Welcome To FreeMovies4U!</h1>
      <RouterLink to="/login" custom v-slot="{ navigate }">
        <button @click="navigate" role="link" class="sign_in">Login</button>
      </RouterLink>
      <RouterLink to="/register" custom v-slot="{ navigate }">
        <button @click="navigate" role="link" class="sign_up">Register</button>
      </RouterLink>
      <img src="../assets/moviebackground.png" />
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  position: relative;
}

h1 {
  color: #0077c9;
  text-align: center;
  padding: 20px;
}

.sign_in {
  font-size: 18px;
  padding: 10px 25px;
  border-radius: 20px;
  background-color: #0077c9;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  border: none;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease;
  position: absolute;
  top: 5%;
  right: 1%;
}

.sign_in:hover {
  background-color: #004d66;
  transform: translateY(-2px);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

.sign_up {
  font-size: 18px;
  padding: 10px 10px;
  border-radius: 20px;
  background-color: #0077c9;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  border: none;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease;
  position: absolute;
  top: 5%;
  right: 12%;
}

.sign_up:hover {
  background-color: #004d66;
  transform: translateY(-2px);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
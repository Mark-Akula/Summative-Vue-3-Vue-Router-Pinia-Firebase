<script setup>
import axios from 'axios';
import { useStore } from '../store/index.js'

const store = useStore();
const props = defineProps(["id"]);
const emits = defineEmits(["toggleModal"]);

const info = await axios.get(`https://api.themoviedb.org/3/movie/${props.id}`, {
  params: {
    api_key: "e5a15bfef5377c118448ec56598ced79",
    append_to_response: "videos"
  },
})
console.log(info)
</script>

<template>
  <Teleport to="body">
    <div class="modal-outer-container" @click.self="emits('toggleModal')">
      <div class="modal-inner-container">
        <button class="close-button" @click="emits('toggleModal')">X</button>
        <div class="poster-text-container">
          <img :src="`https://image.tmdb.org/t/p/w500${info.data.poster_path}`" />
          <div class="text">
            <h1 class="title">{{ info.data.original_title }}</h1>
            <h3>Release Date: {{ info.data.release_date }}</h3>
            <h3>Overview: {{ info.data.overview }}</h3>
            <button class="purchase-button" @click="store.addToCart(props.id, {
              poster: info.data.poster_path,
              title: info.data.original_title,
            })">
              Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-outer-container {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #00000099;
  z-index: 3;
}

.modal-outer-container .modal-inner-container {
  background-color: #1f2123;
  color: white;
  width: 90%;
  height: 90%;
  max-width: 1300px;
  max-height: 1000px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
}

.modal-outer-container .modal-inner-container .close-button {
  position: absolute;
  right: 0px;
  padding: 1rem;
  border: none;
  background: #1f2123;
  font-weight: bold;
  font-size: 1.25rem;
  color: white;
}

.poster-text-container {
  width: 100%;
  display: flex;
  align-items: center;
}

.poster-text-container img {
  width: 50%;
  height: 100%;
  object-fit: cover;
}

.text h3 {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 1.5rem;
  display: flex;
  align-items: left;
  flex-direction: column;
  margin-top: 20px;
}

.title {
  font-size: 5rem;
  font-weight: bold;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-weight: bolder;
  text-align: center;
  margin-top: 20px;
}

.purchase-button {
  background: #0077c9;
  padding: 20px 40px;
  border-radius: 20px;
  color: white;
  text-transform: uppercase;
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
  margin-left: 35%;
  margin-top: 5%;
}

.purchase-button:hover {
  box-shadow: 0px 8px 15px rgb(0, 0, 0);
}
</style>

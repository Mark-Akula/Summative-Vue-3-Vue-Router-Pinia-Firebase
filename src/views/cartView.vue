<script setup>
import { useStore } from '../store/index.js'

const store = useStore();
</script>

<template>
  <div v-for="movie in store.movieItems">
    <img :src="`https://image.tmdb.org/t/p/w500${movie.data.poster}`" class="movie-poster" />
    <h1 class="movie-title">{{ movie.data.title }}</h1>
    <button @click="store.removeFromCart(movie.id)" class="remove-button">Remove</button>
  </div>
</template>

<style scoped>
.movie-title {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin: 1rem;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.movie-poster {
  border-radius: 5px;
  box-shadow: 10px rgb(0, 0, 0);
}
.remove-button {
  border: none;
  padding: 0.5rem 1rem;
  background-color: #f44336;
  color: #fff;
  border-radius: 0.5rem;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: 0.5rem rgb(0, 0, 0);
  transition: all 0.2s ease;
  margin-bottom: 12px;
}
.remove-button:hover {
  background-color: #e53935;
  box-shadow: 1rem rgb(0, 0, 0);
  transform: translateY(-0.2rem);
}
</style>
<script setup>
import { useStore } from '../store/index.js'

const store = useStore();
</script>

<template>
  <div class="cartBox" v-for="movie in Array.from(store.cart.values())">
    <p>Movie Title: {{ movie.title }}</p>
    <img :src="`https://image.tmdb.org/t/p/w500${movie.poster}`" />
  </div>
</template>
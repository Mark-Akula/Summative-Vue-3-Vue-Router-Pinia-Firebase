<script setup>
import axios from "axios";
import { ref } from 'vue';
import SiteModal from '../components/SiteModal.vue';
const showModal = ref(false);
const selectedId = ref(0);
const openModal = (id) => {
    showModal.value = true;
    selectedId.value = id;
};
const closeModal = () => {
    showModal.value = false;
};
let data = (await axios.get("https://api.themoviedb.org/3/trending/movie/week", {
    params: {
        api_key: "e5a15bfef5377c118448ec56598ced79"
    }
})).data.results;
console.log(data)
</script>

<template>
    <div>
        <button @click="addCart()">Cart</button>
        <div class="Movieposter">
            <img v-for="movie in store.movies" :src="movie.poster" @click="openModal(movie.id)" />
        </div>
        <SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
    </div>
</template>

<style scoped>
h1.shopping-cart {
    color: #0077C9;
    text-shadow: 2px 2px 5px #ccc;
    cursor: pointer;
    border-color: #4CAF50;
    border-width: 2px;
    border-style: solid;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    padding: 20px;
    font-size: 25px;
    position: absolute;
    top: 0;
    right: 0;
}

h1.shopping-cart:hover {
    border-color: #0077C9;
    transition: border-color 0.5s ease;
}

img {
    width: 300px;
    border-style: solid;
    border-color: #0f0f0fe0;
    border-width: 1px;
    margin-right: 10px;
    margin-top: 15px;
    transition: border 0.3s;
}

img:hover {
    border-color: #0077C9;
    transition: border-color 0.5s ease;
}
</style>
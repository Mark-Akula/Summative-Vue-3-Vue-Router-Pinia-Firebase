<script setup>
import { useStore } from "../store/index.js";
import router from "../router";
import SiteModal from "../components/SiteModal.vue";
import { ref } from "vue";
const store = useStore();
await store.getMovies();
const showModal = ref(false);
const selectedId = ref(0);
function addCart() {
    router.push("/cart");
}
const openModal = (id) => {
    showModal.value = true;
    selectedId.value = id;
};
const closeModal = () => {
    showModal.value = false;
};
</script>

<template>
    <div>
        <button class="shopping-cart" @click="addCart()">Shopping Cart</button>
        <div class="Movieposter">
            <img v-for="movie in store.movies" :src="movie.poster" class="img" @click="openModal(movie.id)" />
        </div>
        <SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
    </div>
</template>

<style scoped>
.shopping-cart {
    color: #0077C9;
    text-shadow: 2px 2px 5px #ccc;
    cursor: pointer;
    border-color: #4CAF50;
    border-width: 2px;
    border-style: solid;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    padding: 20px;
    font-size: 17px;
    position: absolute;
    margin-right: 1%;
    top: 0;
    right: 0;
}

.shopping-cart:hover {
    border-color: #0077C9;
    transition: border-color 0.5s ease;
}

img {
    width: 300px;
    border-style: solid;
    border-color: #0f0f0fe0;
    border-width: 3px;
    margin-right: 10px;
    margin-top: 15px;
    transition: border 0.3s;
}

img:hover {
    border-color: #0077C9;
    transition: border-color 0.5s ease;
}
</style>
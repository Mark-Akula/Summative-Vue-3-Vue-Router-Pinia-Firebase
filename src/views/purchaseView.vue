<script setup>
import axios from "axios";
import { ref } from "vue";
import SiteModal from "../components/SiteModal.vue";
import { useStore } from "../store/index.js";

const store = useStore();
const genre = ref(28);
const criteria = ref("");
const searchResults = ref([]);
const page = ref(1);
const totalPages = ref(0);
const showModal = ref(false);
const selectedId = ref(0);

const openModal = (id) => {
  showModal.value = true;
  selectedId.value = id;
};

const closeModal = () => {
  showModal.value = false;
};

const getGenres = async () => {
  searchResults.value = [];
  criteria.value = "";
  const select = document.querySelector(".genre-dropdown");
  const id = select.options[select.selectedIndex].getAttribute("data-id");
  await store.getMovies(id);
};

const search = async (direction) => {
  page.value += direction;
  let data = (
    await axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "e5a15bfef5377c118448ec56598ced79",
        query: criteria.value,
        include_adult: false,
        page: page.value,
      },
    })
  ).data;

  totalPages.value = data.total_pages;

  searchResults.value = data.results.map((movie) => {
    return {
      id: movie.id,
      image: movie.poster_path,
    };
  });
  console.log(searchResults.value);
};
</script>

<template>
  <input type="search" v-model="criteria" @keydown.enter="search(0)" class="search-input" />
  <br />
  <RouterLink to="/cart" custom v-slot="{ navigate }">
    <button @click="navigate" role="link" class="cart-button">Cart</button>
  </RouterLink>
  <br />
  <select v-model="genre" @change="getGenres()" class="genre-dropdown">
    <option value="Action" data-id="28">Action</option>
    <option value="Family" data-id="10751">Family</option>
    <option value="Science Fiction" data-id="878">Science Fiction</option>
    <option value="Adventure" data-id="12">Adventure</option>
    <option value="Fantasy" data-id="14">Fantasy</option>
  </select>
  <template v-if="searchResults.length">
    <div class="navigation">
      <button v-show="page > 1" @click="search(-1)" class="previous-button">Prev</button>
      <h1>{{ `Page ${page} of ${totalPages}` }}</h1>
      <button v-show="page < totalPages" @click="search(1)" class="next-button">Next</button>
    </div>
  </template>
  <div class="purchase-container">
    <template v-if="searchResults.length">
      <img v-for="movie in searchResults" :id="movie.id" @click="openModal(movie.id)"
        :src="`https://image.tmdb.org/t/p/w500${movie.image}`" />
    </template>
    <template v-else>
      <img v-for="movie in store.movies" :id="movie.id" @click="openModal(movie.id)"
        :src="`https://image.tmdb.org/t/p/w500${movie.image}`" />
    </template>
    <SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
  </div>
</template>

<style scoped> 
.purchase-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
}
img {
  width: 264px;
  border-style: solid;
  border-color: #0f0f0fe0;
  border-width: 3px;
  margin-right: 10px;
  margin-top: 15px;
  transition: border 0.3s;
}
img:hover {
  border-color: #0077c9;
  transition: border-color 0.5s ease;
}
.navigation {
  display: flex;
  justify-content: space-between;
}
.search-input {
  padding: 8px;
  border-radius: 8px;
  font-size: 16px;
  width: 50%;
  margin: 16px;
}
.cart-button {
  padding: 8px 16px;
  background-color: #ff7f50;
  color: white;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bolder;
  text-transform: uppercase;
  border: none;
  margin-top: 16px;
  cursor: pointer;
}
.cart-button:hover {
  background-color: #ff6347;
}
.genre-dropdown {
  padding: 8px;
  border-radius: 8px;
  font-size: 16px;
  width: 50%;
  margin: 16px;
  border: none;
}
.previous-button, .next-button {
  padding: 8px 16px;
  background-color: #ff7f50;
  color: white;
  border-radius: 8px;
  font-size: 16px;
  text-transform: uppercase;
  border: none;
  margin-bottom: 1%;
  cursor: pointer;
}
.previous-button:hover, .next-button:hover {
  background-color: #ff6347;
}
</style>
import { defineStore } from "pinia";
import axios from "axios";

export const useStore = defineStore("store", {
  state: () => ({
    movies: [],
    cart: new Map(),
    movieItems: [],
  }),
  actions: {
    async getMovies() {
      let data = await axios.get("https://api.themoviedb.org/3/trending/movie/week", {
        params: {
          api_key: "e5a15bfef5377c118448ec56598ced79",
          include_adult: "false",
        },
      });
      for (let movie of data.data.results) {
        this.movies.push({
          id: movie.id,
          poster: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
        });
      }
    },
    addToCart(id, data) {
      this.movieItems.push({ id, data });
    },
    removeFromCart(id) {
      const movieIndex = this.movieItems.findIndex((item) => item.id === id);
      this.movieItems.splice(movieIndex, 1);
    }
  }
});
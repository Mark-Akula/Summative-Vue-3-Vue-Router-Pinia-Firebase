import { defineStore } from 'pinia'
import axios from 'axios';

export const useStore = defineStore('store', {
  state: () => {
    return {
      movies: [],
    }
  },
  actions: {
    async getMovies() {
      let data = (await axios.get("https://api.themoviedb.org/3/trending/movie/week", {
        params: {
          api_key: "e5a15bfef5377c118448ec56598ced79",
        }
      })).data.results;
      
      this.movies = data.map((movie) => {
        return {
          id: movie.id,
          poster: movie.poster_path,
        }
      });
    },
  }
});
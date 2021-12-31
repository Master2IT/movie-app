<template>
  <div>
    <Searchbar @searched="onSearch" />
    <div class="text-center" v-if="loading">Loading...</div>
    <div class="grid grid-cols-5 gap-10" v-else>
      <MovieCard
        v-for="item in items"
        :key="item.id"
        :details="item"
        :genre="genres.filter((o) => item.genre_ids.includes(o.id))"
      />
    </div>
    <div class="my-16 text-center" v-if="!loading">
      <div class="text-lg">
        <a
          href="#"
          :class="page <= 1 ? '' : 'text-pagination'"
          @click.prevent="page > 1 ? (page -= 1) : ''"
          >Previous Page</a
        >
        <span class="mx-5">|</span>
        <a
          href="#"
          class="text-pagination"
          @click.prevent="page <= total_pages ? page += 1 : ''"
          >Next Page</a
        >
      </div>
      <p class="text-center mt-2 text-gray">
        Showing results {{ page }} - {{ total_pages }}
      </p>
    </div>
  </div>
</template>

<script>
import MovieCard from "@/components/MovieCard";
import { getMovies, getGenres } from "@/api/movies";
import Searchbar from "@/components/Searchbar";
export default {
  name: "Home",
  components: { MovieCard, Searchbar },
  data() {
    return {
      page: 1,
      total_pages: 0,
      loading: false,
      items: [],
      genres: [],
      release_start_date: "",
      release_end_date: "",
    };
  },
  watch: {
    page() {
      this.getMovies();
    },
  },
  async mounted() {
    await this.getGenres();
    await this.getMovies();
  },
  methods: {
    onSearch(val) {
      this.release_start_date = val.start;
      this.release_end_date = val.end;
      this.page = 1;
      this.getMovies();
    },
    getGenres() {
      this.loading = true;
      return getGenres()
        .then((res) => {
          this.genres = res.genres;
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
        });
    },
    getMovies() {
      this.loading = true;
      this.items = [];
      const params = {
        page: this.page,
        "primary_release_date.gte": this.release_start_date,
        "primary_release_date.lte": this.release_end_date,
      };

      for (const key in params) {
        if (params[key] === "") {
          delete params[key];
        }
      }
      return getMovies(params)
        .then((res) => {
          this.items = res.results;
          this.page = res.page;
          this.total_pages = res.total_pages;
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
        });
    },
  },
};
</script>

<style></style>

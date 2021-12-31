<template>
  <div>
    <Toolbar :title="details.title" :tagline="details.tagline" />
    <div class="text-center" v-if="loading">Loading...</div>
    <!-- Lists -->
    <div v-else class="mb-10">
      <div class="flex items-center">
        <div>
          <img
            class="w-96 h-2/3 aspect-auto rounded-md bg-white p-2"
            :src="
              details.poster_path
                ? 'https://image.tmdb.org/t/p/original/' + details.poster_path
                : 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'
            "
            :alt="details.title"
          />
        </div>
        <ul class="h-full flex-1 ml-10 self-baseline mt-5">
          <li
            v-for="(list, i) in lists"
            :key="i"
            class="flex justify-between items-center mb-5"
          >
            <span class="font-bold text-lg">{{ list.text }}</span>
            <a
              :href="list.value"
              v-if="list.link"
              class="text-pagination underline"
              >Link</a
            >
            <div v-else-if="list.star" class="flex items-center">
              <span
                class="mdi mdi-star text-star text-xl ml-1"
                v-for="star in list.star"
                :key="star"
              ></span>
              <span class="mx-2">|</span>
              {{ list.value }}
              <span class="text-sm ml-1">({{ list.vote_count }} votes)</span>
            </div>
            <span v-else>{{ list.value }}</span>
          </li>
        </ul>
      </div>
      <!-- Overview -->
      <div class="mt-14 px-2">
        <h2 class="font-bold text-lg">Overview</h2>
        <p class="mt-2 pl-2">{{ overview }}</p>
      </div>
      <!-- Credits -->
      <div class="mt-14 px-2">
        <h2 class="font-bold text-lg">Casts</h2>
        <p class="mt-2 pl-2">
          {{ credits.map((o) => o.original_name).join(", ") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Toolbar from "@/components/Toolbar";
import { getMovieDetails, getCredits } from "@/api/movies";
import _ from "lodash";
export default {
  name: "Details",
  components: { Toolbar },
  data() {
    return {
      details: {},
      lists: [],
      loading: true,
      overview: "",
      credits: [],
    };
  },
  async mounted() {
    var id = this.$route.params.id;
    if (!id) return;

    await this.getCredits(id);
    await this.getMovieDetails(id);
  },
  methods: {
    getCredits(id) {
      return getCredits(id)
        .then((res) => {
          this.credits = _.sortBy(res.cast, [
            function (o) {
              return o.popularity;
            },
          ]).reverse().slice(0, 10);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getMovieDetails(id) {
      this.loading = true;
      getMovieDetails(id)
        .then((res) => {
          this.loading = false;
          this.details = res;
          if (res) {
            this.lists = [
              {
                text: "Budget",
                value: res.budget,
              },
              {
                text: "Revenue",
                value: res.revenue,
              },
              {
                text: "Release Date",
                value: res.release_date,
              },
              {
                text: "RunTime",
                value: res.runtime,
              },
              {
                text: "Score",
                value: res.vote_average,
                star: res.vote_average
                  ? Math.round((Math.round(res.vote_average) * 5) / 10)
                  : 0,
                vote_count: res.vote_count,
              },
              {
                text: "Genres",
                value: res.genres.map((o) => o.name).join(", "),
              },
              {
                text: "IMDB Link",
                value: "https://www.imdb.com/title/" + res.imdb_id,
                link: true,
              },
              {
                text: "Homepage Link",
                value: res.homepage,
                link: true,
              },
            ];
            this.overview = res.overview;
            this.credit = res.credit;
          }
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
        });
    },
  },
};
</script>

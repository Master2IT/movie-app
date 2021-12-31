<template>
  <router-link :to="{ name: 'details', params: { id: details.id } }">
    <img
      class="w-full h-80 aspect-auto rounded-md bg-white p-2"
      :src="
        details.poster_path
          ? 'https://image.tmdb.org/t/p/original/' + details.poster_path
          : 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'
      "
      :alt="details.title"
    />
    <div class="px-1">
      <h3 class="mt-1 font-bold">{{ details.title }}</h3>
      <p class="text-slate-500 text-sm mt-2 text-subtitle">
        <span class="mdi mdi-calendar text-md align-middle mr-1"></span>
        {{ details.release_date }}
      </p>
      <p class="text-sm text-genre">
        {{ genre.map((o) => o.name).join(", ") }}
      </p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    details: Object,
    genre: Array,
  },
};
</script>

<style></style>

<template>
  <div class="bg-white w-full p-10 my-14 rounded-md flex items-center">
    <button
      class="rounded-full bg-searchBtn text-white py-1 px-3"
      @click="$router.go(-1)"
    >
      <span class="mdi mdi-arrow-left-thin text-xl align-middle mr-1"></span>
      Back
    </button>
    <div class="ml-10">
      <h2 class="text-lg font-bold">{{ title }}</h2>
      <p >{{ tagline }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    tagline: String,
  },
};
</script>

<style></style>

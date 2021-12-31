<template>
  <div
    class="bg-white w-full p-10 my-14 rounded-md flex justify-between items-center"
  >
    <div class="flex items-center">
      <span>Search by release date: </span>
      <VueDatePicker
        v-model="dateRange"
        placeholder="type here..."
        range
        no-header
        format="YYYY-MM-DD"
        fullscreen-mobile
        validate
      >
        <template #activator="{ date }">
          <div>
            <input
              placeholder="type here..."
              :value="date"
              readonly
              ref="activator"
              type="text"
              class="bg-base w-64 font-sm rounded-md p-2 ml-5 outline-none"
            />
            <a
              v-if="dateRange"
              href="#"
              class="ml-3 text-pagination"
              @click.prevent="dateRange = ''"
              >clear</a
            >
          </div>
        </template>
      </VueDatePicker>
    </div>
    <button
      class="rounded-full bg-searchBtn text-white py-2 px-3"
      @click="search()"
    >
      Search
      <span
        class="mdi mdi-movie-search-outline text-xl align-middle ml-2 mr-1"
      ></span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
      currentDate: new Date(),
      dateRange: "",
    };
  },
  methods: {
    search() {
      this.$emit("searched", this.dateRange);
    },
  },
};
</script>

<style></style>

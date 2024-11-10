<template>
  <div class="h-full preferencesPage">
    <preference-swiper :preferences="preferences"></preference-swiper>
    <navbar @applySearch="applySearch"></navbar>
  </div>
</template>

<script>
import PreferenceSwiper from "@/components/PreferenceSwiper";
import Navbar from "@/components/Navbar";

export default {
  data: () => ({
    preferences: [],
  }),
  props: {},
  components: {
    PreferenceSwiper,
    Navbar,
  },
  created() {
    this.getSuggestions();
  },
  methods: {
    getSuggestions() {
      fetch("https://itnderary.bleggbeard.io/api/pois")
        .then((res) => res.json())
        .then((res) => {
          this.preferences = res;
        });
    },
    applySearch(searchValue = "") {
      if (searchValue) {
        //
      } else {
        //
      }
    },
  },
};
</script>

<style scoped lang="css">
.preferencesPage {
  display: grid;
  grid-template-rows: 1fr auto;
}
</style>

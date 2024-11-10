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
    salzburgPreferences: [],
    allPreferences: [
      {
        name: "Stephansdom",
        description:
          "St. Stephen's Cathedral on Vienna's Stephansplatz has been a cathedral church since 1365, a cathedral since 1469/1479 and a metropolitan church of the Archbishop of Vienna since 1723. It is also the parish church of the St. Stephen's Cathedral Parish in Vienna's city center.",
        image: "https://www.foto-julius.at/wien14/W7048b_Wien_Stephansdom.jpg",
        tags: ["church"],
      },
    ],
  }),
  props: {},
  components: {
    PreferenceSwiper,
    Navbar,
  },
  created() {
    this.getSuggestions();
    this.preferences = this.allPreferences;
  },
  methods: {
    getSuggestions() {
      fetch("https://itnderary.bleggbeard.io/api/pois")
        .then((res) => res.json())
        .then((res) => {
          this.salzburgPreferences = res;
        });
    },
    applySearch(searchValue = "") {
      if (searchValue) {
        this.preferences = this.salzburgPreferences;
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

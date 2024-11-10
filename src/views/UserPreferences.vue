<template>
  <div class="h-full preferencesPage">
    <button
      class="continueButton px-2 py-1 absolute rounded-md"
      @click="toToPreferences"
    >
      Continue
      <img src="../assets/icons/arrow-left.svg" class="arrow" />
    </button>
    <preference-swiper
      :preferences="preferences"
      :textOverImage="true"
    ></preference-swiper>
    <navbar :hideSearch="true"></navbar>
  </div>
</template>

<script>
import PreferenceSwiper from "@/components/PreferenceSwiper";
import Navbar from "@/components/Navbar";

export default {
  data: () => ({
    preferences: [],
  }),
  components: {
    PreferenceSwiper,
    Navbar,
  },
  created() {
    this.getPreferences();
  },
  methods: {
    getPreferences() {
      fetch("https://itnderary.bleggbeard.io/api/moods")
        .then((res) => res.json())
        .then((res) => {
          this.preferences = res;
        });
    },
    toToPreferences() {
      this.$router.push("/suggestions");
    },
  },
};
</script>

<style scoped lang="css">
.preferencesPage {
  display: grid;
  grid-template-rows: 1fr auto;
}

.continueButton {
  background-color: #f79f1f;
  z-index: 1;
  right: 16px;
  top: 24px;
  display: flex;
  gap: 6px;
}

.arrow {
  transform: rotate(180deg);
  width: 22px;
  height: 22px;
}
</style>

<template>
  <div class="h-full preferencesPage">
    <div class="content">
      <h1 class="text-2xl my-3 font-semibold">Your selection</h1>
      <preference-list></preference-list>
    </div>
    <navbar :hideSearch="true"></navbar>
  </div>
</template>

<script>
import PreferenceList from "@/components/PreferenceList";
import Navbar from "@/components/Navbar";

export default {
  components: {
    PreferenceList,
    Navbar,
  },
};
</script>

<style scoped>
.preferencesPage {
  display: grid;
  grid-template-rows: 1fr auto;
  text-align: start;
}
.content {
  padding: 24px;
}
</style>

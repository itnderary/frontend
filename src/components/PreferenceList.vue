<template>
  <div class="pt-2">
    <div v-for="group in groups" class="mt-2">
      <h2 class="text-lg">{{ group.name }}</h2>
      <ul class="list text-md mt-3">
        <preference-item
          :preference="preference"
          v-for="preference in group.items"
        ></preference-item>
      </ul>
    </div>
  </div>
</template>

<script>
import PreferenceItem from "@/components/PreferenceItem";

export default {
  data: () => ({
    groups: [],
  }),
  components: {
    PreferenceItem,
  },
  created() {
    this.loadPreferences();
  },
  methods: {
    loadPreferences() {
      fetch("https://itnderary.bleggbeard.io/api/recommendation")
        .then((res) => res.json())
        .then((res) => {
          this.groups = res;
        });
    },
  },
};
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>

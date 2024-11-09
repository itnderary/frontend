<template>
  <span :class="['badge bg-teal-700 text-white px-1 rounded-md']">
    <slot>{{ text }}</slot>
  </span>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.badge {
}
</style>

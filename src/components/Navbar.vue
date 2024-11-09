<template>
  <div class="relative">
    <div class="searchWrapper" v-show="searchOpen">
      <label for="search" class="block mb-2">Where you want to go?</label>
      <input
        type="text"
        v-model="searchValue"
        id="search"
        placeholder="Vienna"
        class="px-2 py-1 border rounded-md"
      />
      <div class="flex justify-center mt-3">
        <button
          class="applyButton mt-2 px-2 py-1 bg-emerald-400 rounded-md"
          @click="closeSearch"
        >
          Apply
        </button>
      </div>
    </div>
    <nav class="navbar flex justify-between items-center px-4 py-2">
      <div>
        <img src="../assets/icons/user.svg" />
      </div>
      <div v-show="!hideSearch">
        <button @click="toggleSearch">
          <img src="../assets/icons/search.svg" />
        </button>
      </div>
      <div>
        <img src="../assets/icons/bar.svg" />
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data: () => ({
    searchOpen: false,
    searchValue: "",
  }),
  props: {
    hideSearch: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleSearch() {
      this.searchOpen = !this.searchOpen;
    },
    closeSearch() {
      this.searchOpen = false;
      this.$emit("applySearch", this.searchValue);
    },
  },
};
</script>

<style scoped>
.navbar {
  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
}

img {
  height: 36px;
  width: 36px;
}

.searchWrapper {
  position: absolute;
  left: 50%;
  bottom: calc(100% + 2px);
  background-color: #fff;
  transform: translateX(-50%);
  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  z-index: 2;
  padding: 24px;
}
input {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 80%;
}

.applyButton {
  width: 40%;
}
</style>

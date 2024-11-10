<template>
  <div class="swiper h-full w-full relative">
    <template v-if="activeIdx > -1">
      <div
        v-for="(item, idx) in preparedPreferences"
        :class="['preferenceWrapper absolute', activeIdx !== idx ? 'hide' : '']"
        v-show="idx <= activeIdx"
      >
        <div class="p-2 h-full">
          <div class="preference h-full">
            <img :src="item.image" class="rounded-lg baseImage" />
            <div
              :class="{
                'infoWrapper rounded-lg': true,
                textOverImage: textOverImage,
                open: showMoreOpen,
              }"
            >
              <div class="info relative">
                <div class="title">
                  {{ item.name }}
                </div>
                <div
                  v-if="item.description"
                  :class="{ description: true, open: showMoreOpen }"
                >
                  {{ item.description }}
                </div>
                <div
                  v-if="item.tags && item.tags.length > 0"
                  class="flex tagList mt-3"
                >
                  <tag v-for="tag in item.tags">{{ tag }}</tag>
                </div>
                <button
                  v-if="item.description"
                  class="showMoreButton"
                  @click="toggleShowMore"
                >
                  {{ showMoreOpen ? "Show less" : "Show more" }}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="actionButtons flex justify-center">
          <button
            class="actionButton text-white bg-rose-600 color-white p-2"
            @click="goToNext"
            v-tooltip="'Dislike'"
          >
            <img src="../assets/icons/cross.svg" alt="Logo" />
          </button>
          <button
            class="actionButton small text-white bg-blue-700 color-white p-2"
            @click="goToNext"
            v-tooltip="'Super like'"
          >
            <img src="../assets/icons/star.svg" alt="Logo" />
          </button>
          <button
            class="actionButton text-white bg-green-600 p-2"
            @click="goToNext"
            v-tooltip="'Like'"
          >
            <img src="../assets/icons/check.svg" alt="Logo" />
          </button>
        </div>
      </div>
    </template>
    <div v-else class="noPreferences">
      <p>No more preferences</p>
      <button class="px-2 py-2 bg-emerald-400 rounded-md">Continue</button>
    </div>
  </div>
</template>

<script>
import Tag from "@/components/Tag";

export default {
  data: () => ({
    sliding: false,
    activeIdx: 0,
    showMoreOpen: false,
  }),
  props: {
    preferences: {
      type: Array,
      default: () => [],
    },
    textOverImage: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Tag,
  },
  computed: {
    preparedPreferences() {
      return [...this.preferences].reverse();
    },
  },
  watch: {
    preferences(val) {
      this.activeIdx = val.length - 1;
    },
  },
  created() {
    this.activeIdx = this.preferences.length - 1;
    console.log("asdf");
  },
  methods: {
    goToNext() {
      this.sliding = true;

      this.activeIdx -= 1;
      if (this.activeIdx < -1) {
        this.activeIdx = -1;
      }
      this.showMoreOpen = false;
      setTimeout(() => {
        this.sliding = false;
      }, 300);
    },
    toggleShowMore() {
      this.showMoreOpen = !this.showMoreOpen;
    },
  },
};
</script>

<style scoped>
.swiper {
  height: 100%;
}

.preferenceWrapper {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 55px;

  /* transform-origin: bottom right;
  transform: rotate(45deg) translate(20px, 0); */
}
.preferenceWrapper.hide {
  opacity: 0;
}

.preference {
  position: relative;
}

.textOverImage.infoWrapper {
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 12px;
  justify-content: center;
  font-size: 40px;
  font-weight: 500;
  background: #00000061;
  color: white;

  bottom: 0px;
  left: 0px;
  width: 100%;
}
.infoWrapper {
  position: absolute;
  bottom: -1px;
  left: -1px;
  width: 102%;
  padding: 60px 12px;
  background: linear-gradient(
    to top,
    white 0%,
    #fffffff5 50%,
    #ffffffe9 80%,
    transparent 100%
  );
  display: grid;
  align-items: end;
  grid-template-columns: 1fr auto;
}
.textOverImage .info {
  text-align: center;
}
.textOverImage .title {
  font-size: 32px;
}
.infoWrapper.open {
  background: linear-gradient(
    to top,
    white 0%,
    #fffffff5 50%,
    #ffffffe9 90%,
    transparent 100%
  );
}

.showMoreButton {
  white-space: nowrap;
  color: #0f766e;
  font-size: 13px;
  position: absolute;
  bottom: 0;
  right: 0;
}
.showMoreButton:hover {
  text-decoration: underline;
}
.info {
  width: 100%;
  text-align: left;
  min-width: 0;
}
.title {
  font-size: 24px;
  font-weight: 500;
}
.description {
  font-size: inherit;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 80%;
  max-height: 20px;

  transition: max-height 0.3s ease-out;
}
.description.open {
  white-space: unset;
  max-height: 300px;
  overflow: auto;
}

.baseImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.actionButtons {
  gap: 50px;
}
.actionButton {
  border-radius: 50%;
  width: 70px;
  height: 70px;
  margin-top: -40px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
}
.actionButton img {
  width: 40px;
  height: 40px;
}
.actionButton.small {
  width: 45px;
  height: 45px;
}

.noPreferences {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.tagList {
  gap: 6px;
}
</style>

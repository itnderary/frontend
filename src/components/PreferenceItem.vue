<template>
  <li
    :class="['itemWrapper relative p-2 border rounded-md hover:bg-slate-100']"
    @click="toggleTile"
  >
    <div :class="['item relative', isOpen ? 'open' : '']">
      <div class="tileContent">
        <div class="baseInfoWrapper">
          <div class="baseInfos">
            <img :src="preference.image" class="image" />
            <span class="float-left">{{ preference.name }} </span>
          </div>
          <img src="../assets/icons/menu.svg" class="menuIcon" />
        </div>
        <div v-if="isOpen" class="information">
          <div class="mb-2 font-semibold">Basic information</div>
          <ul>
            <li class="singleInfo">
              <img src="../assets/icons/phone.svg" class="infoIcon" />
              <span>{{ preference.phone }}</span>
            </li>
            <li class="singleInfo">
              <img src="../assets/icons/globe.svg" class="infoIcon" />
              <a :href="preference.url" class="websiteUrl">{{
                preference.url
              }}</a>
            </li>
            <li class="singleInfo">
              <img src="../assets/icons/map.svg" class="infoIcon" />
              <span>{{ preference.address }}</span>
            </li>
            <li class="singleInfo">
              <img src="../assets/icons/clock.svg" class="infoIcon" />
              <span>{{ preference.opening_hours }}</span>
            </li>
          </ul>
          <div
            v-if="preference.tags && preference.tags.length > 0"
            class="flex tagList mt-3"
          >
            <tag v-for="tag in preference.tags">{{ tag }}</tag>
          </div>
          <div class="description mt-2">
            {{ preference.description }}
          </div>
          <button class="showMoreButton">
            {{ showMoreOpen ? "Show less" : "Show more" }}
          </button>
          <div v-if="preference.recommondations" class="usersRecommondations">
            <div class="font-semibold">Other users also like</div>
            <ul class="mt-2">
              <li
                v-for="recommondation in preference.recommondations"
                class="grid recommondationItem"
              >
                <img
                  :src="recommondation.image"
                  class="recommondationImage rounded-md"
                />
                <div class="">
                  <span class="">{{ recommondation.name }}</span>
                  <div
                    v-if="recommondation.tags && recommondation.tags.length > 0"
                    class="flex tagList text-sm"
                  >
                    <tag v-for="tag in recommondation.tags">{{ tag }}</tag>
                  </div>
                </div>
                <img src="../assets/icons/chevron-right.svg" class="plus" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <img
      v-if="preference.prio === 1"
      src="../assets/icons/star_filled.svg"
      class="priorityIcon absolute float-left ml-2 m-auto"
      v-tooltip="'priority'"
    />
  </li>
</template>

<script>
import Tag from "@/components/Tag";

export default {
  data: () => ({
    isOpen: false,
  }),
  props: {
    preference: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    Tag,
  },
  methods: {
    toggleTile() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
.itemWrapper {
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}
.item.open {
  height: 490px;
}
.item {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 4px;
  height: 50px;
  overflow: hidden;

  transition: height 0.2s ease-out;
}

.priorityIcon {
  width: 26px;
  height: 26px;
  top: -8px;
  right: -8px;
}

.baseInfoWrapper {
  display: grid;
  grid-template-columns: 1fr auto;
}

.menuIcon {
  width: 24px;
  height: 24px;
  margin: auto;
}

.baseInfos {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 6px;
}

.image {
  width: 50px;
  height: 50px;
  border-radius: 4px;
  object-fit: cover;
}

.singleInfo {
  display: flex;
  gap: 4px;
}
.singleInfo + .singleInfo {
  margin-top: 6px;
}

.infoIcon {
  width: 18px;
  height: 18px;
  margin-right: 6px;
}

.information {
  margin-left: 12px;
  margin-top: 24px;
  display: grid;
}

.tagList {
  gap: 6px;
}

.description {
  font-size: inherit;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 12px 0;
  max-height: 75px;
}

.showMoreButton {
  white-space: nowrap;
  color: #0f766e;
  font-size: 13px;
  margin-top: 8px;
}

.websiteUrl {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-decoration: underline;
}
.websiteUrl:hover {
  color: #0f766e;
}

.recommondationItem {
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  height: 56px;
  padding-left: 3px;
}
.recommondationImage {
  width: 50px;
  height: 50px;
}
.plus {
  width: 24px;
  height: 24px;
}
.usersRecommondations {
  margin-top: 28px;
}
</style>

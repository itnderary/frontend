import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import VTooltip from "v-tooltip";

Vue.use(VTooltip);

// Disable production tip
Vue.config.productionTip = false;

function preloadImages(imageUrls) {
  return Promise.all(
    imageUrls.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = resolve;
        img.onerror = reject;
      });
    })
  );
}

const images = [
  "http://resc.deskline.net/images/SPO/1/41fa6cc7-1daa-40da-a2a2-2cc91d134914/99/image.jpg",
  "http://resc.deskline.net/images/SKI/1/6593c574-ca25-47bc-9357-54537ab5ffcf/99/image.jpg",
  "http://resc.deskline.net/images/TSG/1/5441b1fc-8eff-4ed7-9ee6-14dfd74b2cb2/99/image.jpg",
  "http://resc.deskline.net/images/TSG/1/ab48193d-60f5-4499-acb7-13e3d721ef30/99/image.jpg",
  "http://resc.deskline.net/images/TSG/1/d683bd6c-3456-4897-b3b2-8ea1cd69b683/99/image.jpg",
];

preloadImages(images)
  .then(() => {
    console.log("All images preloaded!");
  })
  .catch((error) => {
    console.error("Failed to preload images", error);
  });

// Create Vue instance
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

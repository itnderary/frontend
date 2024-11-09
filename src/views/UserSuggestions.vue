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
  data: () => ({}),
  props: {},
  components: {
    PreferenceSwiper,
    Navbar,
  },
  computed: {
    preferences() {
      return [
        {
          name: "Museums",
          image:
            "https://www.mqw.at/fileadmin/_processed_/b/3/csm_RodrigoBraga_Ausstellungsansicht_29baa32a2c.jpg",
          description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
          tags: ["culture", "museum"],
        },
        {
          name: "Winter Sports",
          image:
            "https://www.skiweekends.com/assets/uploads/image_library/show/1664800087_schladming-ski-breaks.jpeg",
          description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
          tags: ["sports"],
        },
        {
          name: "Idyllic Towns",
          image: "https://ichef.bbci.co.uk/images/ic/1920xn/p08fq4z7.jpg.webp",
        },
        {
          name: "Hiking",
          image:
            "https://i.natgeofe.com/n/7afda449-1780-4938-8342-2abe32326c86/Montblanchike.jpg",
        },
        {
          name: "Mountain Views",
          image:
            "https://d2exd72xrrp1s7.cloudfront.net/www/000/1k1/1t/1twn23w0a61br67gbdcnec5rs27qj3t07-uhi1133005/0?width=3072&height=2304&crop=false&q=70",
        },
        {
          name: "Austrian Beer",
          image:
            "http://wevemadeahugemistake.com/wp-content/uploads/2015/06/IMG_5661.jpg",
        },
      ];
    },
  },
  methods: {
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

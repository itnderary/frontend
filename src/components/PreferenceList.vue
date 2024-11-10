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
    groups: [
      {
        name: "Culture",
        items: [
          {
            name: "Mozarteumorchester Salzburg",
            description:
              'Botschafter der Mozartstadt. Der Allrounder: Das Mozarteumorchester ist Salzburgs Symphonie-, Festspiel- und Opernorchester. Es entstand mit der Unterstützung von Mozarts Witwe Constanze und den gemeinsamen Söhnen Franz Xaver und Karl Thomas. Sein Ursprung geht auf den 1841 gegründeten „\u003ca href="https://www.sn.at/wiki/Dom-Musikverein_und_Mozarteum"\u003eDommusikverein und Mozarteum\u003c/a\u003e“ zurück. Heute ist das Mozarteumorchester eines der führenden Symphonieorchester Österreichs. \u003c/p\u003e\u003ch3\u003e Die Wiener Klassik in neuem Licht \u003c/h3\u003e\u003cp\u003eDie große Spezialität des Mozarteumorchesters ist eine neue, spannende Interpretation der \u003ca href="https://de.wikipedia.org/wiki/Wiener_Klassik"\u003eWiener Klassik\u003c/a\u003e. Natürlich spielt Salzburgs ‚Lokalmatador‘, Wolfgang Amadeus Mozart, eine besondere Rolle im Repertoire. Jedoch kommen auch Werke der Romantik und Zeitgenössisches zum Zug. \u003c/p\u003e\u003ch3\u003eMozarteumorchester live erleben \u003c/h3\u003e\u003cp\u003eDas Mozarteumorchester veranstaltet zwei eigene Konzertreihen: die Sonntagsmatineen und die Donnerstagskonzerte. Fixe Engagements hat das Orchester bei den Festspielen mit den Mozart-Matineen und für Opernproduktionen. Außerdem ist es bei der Mozartwoche aktiv und gibt Musikvorstellungen im Salzburger Landestheater. Dazu kommen zahlreiche Gastspiele und Tourneen von Wien bis Tokyo. \u003c/p\u003e\u003ch3\u003e Ein offenes Ohr für klassische Musik lehren \u003c/h3\u003e\u003cp\u003eDie Musikvermittlung liegt dem Mozarteumorchester sehr am Herzen. In interaktiven Workshops und offenen Proben will das Orchester vor allem der jungen Generation klassische Musik näherbringen. Auch Angebote für Jugendliche und Erwachsene eröffnen eine neue Welt des Hörens. \u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003ca href="https://www.salzburg.info/de/magazin/stadterlebnis/ein-meer-aus-himmlischen-klaengen_a_339203"\u003eEin Meer aus himmlischen Klängen\u003c/a\u003e\u003c/li\u003e \u003c/ul\u003e  ',
            image:
              "http://resc.deskline.net/images/TSG/1/ab48193d-60f5-4499-acb7-13e3d721ef30/99/image.jpg",
            tags: ["culture", "music"],
            prio: 1,
            url: "https://tailwindcss.com/docs/font-weight",
            opening_hours: "Fr-So 16:00 - 22:00",
            address: "Schwarzstr. 26, 5020 Salzburg",
            phone: "+43 (0) 662 889 40",
            recommondations: [
              {
                name: "Schauspielhaus Salzburg",
                image:
                  "https://www.schauspielhaus-salzburg.at/wp-content/uploads/2022/08/Anfahrt-1.jpg",
                tags: ["theater"],
              },
            ],
          },
          {
            name: "Mozarts Wohnhaus, Mozart Denkmal und Mozartplatz",
            description:
              "\u003cp\u003eVon 1773 bis 1787 lebte die Familie Mozart im „Tanzmeisterhaus“ am  heutigen Makartplatz. Die geräumige Acht-Zimmer-Wohnung im ersten Stock  beherbergt nun ein Museum.\u003c/p\u003e\u003cp\u003eDer Mozartplatz befindet sich im Zentrum der Salzburg Altstadt und ist  umgeben von Residenz- und Waagplatz. Das Herzstück des Platzes bildet  die Mozart-Statue. \u003c/p\u003e",
            image:
              "http://resc.deskline.net/images/SPO/1/41fa6cc7-1daa-40da-a2a2-2cc91d134914/99/image.jpg",
            tags: ["culture", "museum"],
            opening_hours: "Mo-So 10:00 - 18:00",
            address: "Makartplatz 8, 5020 Salzburg",
            url: "https://tailwindcss.com/docs/font-weight",
            phone: "+43 (0) 662 87 42 27 40",
          },
        ],
      },
    ],
  }),
  components: {
    PreferenceItem,
  },
  created() {
    this.loadPreferences();
  },
  methods: {
    loadPreferences() {
      // fetch("https://itnderary.bleggbeard.io/api/pois")
      //   .then((res) => res.json())
      //   .then((res) => {
      //     console.log("ress", res);
      //   });
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

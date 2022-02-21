<template>
  <v-app>
    <v-main>
      <MainWindow v-if="!isMobile" />
      <mobileWindow v-else />
    </v-main>
  </v-app>
</template>

<script>
import MainWindow from "./components/MainWindow";
import mobileWindow from "./components/mobileWindow";

export default {
  name: "App",

  components: {
    MainWindow,
    mobileWindow,
  },

  data: () => ({
    isMobile: null,
  }),

  mounted() {
    this.isMobile = this.am_i_mobile();
  },

  methods: {
    am_i_mobile() {
      return window.innerWidth <= 768;
    },
  },
};
</script>

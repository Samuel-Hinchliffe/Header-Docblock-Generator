<template>
  <v-app>
    <v-main>
      <MainWindow v-if="!isMobile" />
      <mobileWindow v-else />
    </v-main>
  </v-app>
</template>

<script>
/**
 * @author Samuel Hinchliffe <sam.hinchliffe.work@gmail.com>
 * @see    {@link linkedin.com/in/samuel-hinchliffe-🚀-2bb5801a5/ | Author's Linkedin }
 *
 * @version 1.0.0
 * @since File available since Release 1.0.0
 * @see {@link https://github.com/Samuel-Hinchliffe/Header-Docblock-Generator }
 * @file This file is the where we mount the main window which encapsualtes all of
 * the core features and the mobile window is displayed when you're on mobile.
 * Currently the mobile window is used just to let the user know that the application
 * is unavailable to them.
 *
 * Created at: 23/2/2022
 * @license MIT
 */

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

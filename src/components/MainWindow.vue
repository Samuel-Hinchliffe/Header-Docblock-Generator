<template>
  <v-app id="inspire">
    <v-system-bar app>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <a href="https://github.com/Samuel-Hinchliffe" target="_blank">
            <v-icon dark v-bind="attrs" v-on="on">
              {{ svgPath }}
            </v-icon>
          </a>
        </template>
        <span>Github</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <a
            href="https://www.linkedin.com/in/samuel-hinchliffe-%F0%9F%9A%80-2bb5801a5/"
            target="_blank"
          >
            <v-icon dark v-bind="attrs" v-on="on">
              {{ linkPath }}
            </v-icon>
          </a>
        </template>
        <span>Linkedin</span>
      </v-tooltip>
    </v-system-bar>

    <v-app-bar app clipped-right flat height="72">
      <v-app-bar-title> Page Level DocBlock </v-app-bar-title>
      <v-icon right> {{ quote }} </v-icon>
      <v-spacer></v-spacer>
      <v-btn color="primary" depressed v-show="show_delete_button">
        <v-icon left>
          {{ bin }}
        </v-icon>
        Delete
      </v-btn>
    </v-app-bar>

    <!-- <v-navigation-drawer
      v-model="drawer"
      app
      width="200"
      align="center"
      justify="center"
    >
      <v-sheet
        color="grey darken-4"
        height="72"
        width="100%"
        align="center"
        justify="center"
        style="display: flex; align-items: center; justify-content: center"
      >
        <v-fab-transition align="center" justify="center">
          <v-btn rounded color="primary" dark>
            <v-icon left> {{ plus }} </v-icon> New</v-btn
          >
        </v-fab-transition>
      </v-sheet>

      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="v-center"
              ><v-icon left> {{ phpIcon }} </v-icon> Page Doc
              1</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->

    <v-main class="pa-6 ma-1">
      <v-container fluid>
        <v-row>
          <!-- <aboutWindow
            v-show="show_about_window"
            @perma_hide_about="perma_hide_about"
          /> -->
          <docGenRow />
        </v-row>
      </v-container>
    </v-main>

    <v-footer app color="transparent" height="72" inset>
      <div class="text-center" v-show="show_generate_button">
        <v-btn rounded color="primary" dark>
          <v-icon left> {{ hammer }} </v-icon> Generate DocBlock</v-btn
        >
      </div>
    </v-footer>
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
 * @file This file encapsulates 2 main components. The finalDocGen window, which is a simple window
 * which we pass text too. This text is then shown in the code format. All those fancy colors too.
 *
 * Created at: 23/2/2022
 * @license MIT
 */

import { mdiGithub } from "@mdi/js";
import { mdiLinkedin } from "@mdi/js";
import { mdiHammer } from "@mdi/js";
import { mdiPlusCircle } from "@mdi/js";
import { mdiCommentQuote } from "@mdi/js";
import { mdiDelete } from "@mdi/js";
import { mdiLanguagePhp } from "@mdi/js";
import { mdiLanguageJavascript } from "@mdi/js";
import docGenRow from "./docGenRow.vue";

export default {
  components: {
    // aboutWindow,
    docGenRow,
  },

  data: () => ({
    drawer: null,
    svgPath: mdiGithub,
    linkPath: mdiLinkedin,
    hammer: mdiHammer,
    plus: mdiPlusCircle,
    quote: mdiCommentQuote,
    bin: mdiDelete,
    phpIcon: mdiLanguagePhp,
    jsIcon: mdiLanguageJavascript,

    show_delete_button: false,
    show_generate_button: false,
    show_about_window: false,
  }),

  mounted() {
    // Check local storage, have they closed the about window?
    // Don't show it then.
    this.show_about_window = this.show_about_or_not();
  },

  methods: {
    perma_hide_about() {
      this.show_about_window = false;
      localStorage.setItem("hide_about_page", true);
    },
    show_about_or_not: function () {
      if (localStorage.getItem("hide_about_page") == "true") {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<style lang="scss">
a {
  .v-icon__svg {
    transition: 200ms ease-in-out;
  }
  .v-icon__svg:hover {
    fill: white;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>

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
      JS & PHP Docblock generator
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app width="200">
      <v-sheet color="grey lighten-1" height="72" width="100%">+ New Docblock</v-sheet>

      <v-list shaped>
        <v-list-item v-for="n in 5" :key="n" link>
          <v-list-item-content>
            <v-list-item-title>Item {{ n }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <!--  -->
    </v-main>

    <v-footer app color="transparent" height="72" inset>
      <div class="text-center">
        <v-btn rounded color="primary" dark>
          <v-icon left> {{ hammer }} </v-icon> Generate DocBlock</v-btn
        >
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import { mdiGithub } from "@mdi/js";
import { mdiLinkedin } from "@mdi/js";
import { mdiHammer } from "@mdi/js";

export default {
  data: () => ({
    drawer: null,
    svgPath: mdiGithub,
    linkPath: mdiLinkedin,
    hammer: mdiHammer,
  }),
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
</style>

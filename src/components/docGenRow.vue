<template>
  <v-row>
    <v-col>
      <v-card class="elevation-12" rounded="lg" v-show="!language_picked">
        <v-toolbar dark r class="v-center">
          <v-toolbar-title class="v-center">Options</v-toolbar-title>
        </v-toolbar>
        <v-card-text
          >Pick a language in which you wish to generate your page level doc
        </v-card-text>
        <v-card-text style="display: flex; justify-content: center">
          <v-btn
            color="secondary"
            depressed
            style="margin-right: 10px"
            v-on:click="language_picked_method('js')"
          >
            <v-icon left>
              {{ jsIcon }}
            </v-icon>
            Javascript
          </v-btn>
          <v-btn
            color="secondary"
            depressed
            v-on:click="language_picked_method('php')"
          >
            <v-icon left>
              {{ phpIcon }}
            </v-icon>
            PHP
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>

    <finalDocGen v-show="language_picked" :text_prop="js_sample" />
    <sampleDocGen v-show="!language_picked" />
  </v-row>
</template>
<script>
import { mdiInformationOutline } from "@mdi/js";
import { mdiLanguagePhp } from "@mdi/js";
import { mdiLanguageJavascript } from "@mdi/js";
import sampleDocGen from "./sampleDocGen.vue";
import "vue-code-highlight/themes/duotone-sea.css";
import Sample from "../classes/Sample.js";
import "vue-code-highlight/themes/window.css";
import finalDocGen from "./finalDocGen.vue";

export default {
  components: {
    sampleDocGen,
    finalDocGen,
  },
  data: () => ({
    about: mdiInformationOutline,
    language_picked: true,
    doc: "",
    phpIcon: mdiLanguagePhp,
    jsIcon: mdiLanguageJavascript,
    docGen_area: ``,
    docblock_lang: "js",
    js_sample: Sample.sample_text_js,
    php_sample: Sample.sample_text_php,

    docblock_options: {
      textblock: "test",
    },
  }),

  methods: {
    language_picked_method(lang) {
      this.docblock_lang = lang;

      switch (this.docblock_lang) {
        case "js":
          this.js_selected();
          break;
        case "php":
          this.php_selected();
          break;

        default:
          break;
      }
      return lang;
    },

    js_selected() {},
    php_selected() {},
  },
};
</script>

<style lang="scss">
.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #e2e2e2;
}
.theme--dark.v-application code {
  background-color: rgb(255 255 255 / 0%);
  color: currentColor;
}
.v-center {
  display: flex;
  display: flex;
  align-content: center;
  align-items: center;
}
a {
  .v-icon__svg {
    transition: 200ms ease-in-out;
  }

  .v-icon__svg: hover {
    fill: white;
  }
}
</style>

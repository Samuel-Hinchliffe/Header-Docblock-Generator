<template>
  <v-row>
    <v-col>
      <v-card class="elevation-12" rounded="lg">
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

    <finalDocGen
      v-if="language_picked"
      v-bind:text_prop="docblock_options.textblock"
    />
    <sampleDocGen v-show="!language_picked" />
  </v-row>
</template>
<script>
import { mdiInformationOutline } from "@mdi/js";
import { mdiLanguagePhp } from "@mdi/js";
import { mdiLanguageJavascript } from "@mdi/js";
import Page_Doc_PHP from "../classes/Page_Doc_PHP";
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
    language_picked: false,
    doc: "",
    phpIcon: mdiLanguagePhp,
    jsIcon: mdiLanguageJavascript,
    docGen_area: ``,
    docblock_lang: "js",
    js_sample: Sample.sample_text_js,
    php_sample: Sample.sample_text_php,
    textblock: String,

    docblock_options: {
      textblock: Sample.sample_text_js,
      docblock_lang: "js",
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

    js_selected() {
      console.log("js selected");
      this.docblock_options.docblock_lang = "js";
      this.docblock_options.textblock = "JAAAAAAAAAAAAAAAAAAAAAVA";
      this.language_picked = true;
    },
    php_selected() {
      console.log("php selected");
      this.docblock_options.docblock_lang = "php";
      this.language_picked = true;
      this.php_doc = new Page_Doc_PHP("script 1");
      this.docblock_options.textblock = this.php_doc.init_text();
      console.log(this.php_doc);
    },
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

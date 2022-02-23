<template>
  <v-col class="col">
    <v-card class="elevation-12" rounded="lg">
      <v-toolbar dark>
        <v-toolbar-title class="v-center">Page Level DocBlock</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
              v-clipboard="js_sample"
              v-show="docblock_lang === 'js'"
            >
              <v-icon>{{ copy }}</v-icon>
            </v-btn>
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
              v-clipboard="php_sample"
              v-show="docblock_lang === 'php'"
            >
              <v-icon>{{ copy }}</v-icon>
            </v-btn>
          </template>
          <span>Copy to clipboard</span>
        </v-tooltip>
      </v-toolbar>

      <code-highlight
        class="pa-5"
        language="js"
        v-show="docblock_lang === 'js'"
      >
        <pre ref="textToCopy" class="language-js"
          >{{ js_sample }}
          </pre
        >
      </code-highlight>
      <code-highlight
        class="pa-5"
        language="js"
        v-show="docblock_lang === 'php'"
      >
        <pre ref="textToCopy" class="language-js"
          >{{ php_sample }}
          </pre
        >
      </code-highlight>
    </v-card>
  </v-col>
</template>

<script>
/**
 * @author Samuel Hinchliffe <sam.hinchliffe.work@gmail.com>
 * @see    {@link linkedin.com/in/samuel-hinchliffe-🚀-2bb5801a5/ | Author's Linkedin }
 *
 * @version 1.0.0
 * @since File available since Release 1.0.0
 * @see {@link https://github.com/Samuel-Hinchliffe/Header-Docblock-Generator }
 * @file This file is where we display a sample DocGen. This is just a static file.
 * Originally the idea was that we had 2 different samples, but the idea was scrapped
 * for a better idea.
 *
 * Created at: 23/2/2022
 * @license MIT
 */

import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/duotone-sea.css";
import Sample from "../classes/Sample.js";
import "vue-code-highlight/themes/window.css";
import { clipboard } from "vue-clipboards";
import { mdiContentCopy } from "@mdi/js";

export default {
  components: {
    CodeHighlight,
  },

  directives: {
    clipboard,
  },

  data: () => ({
    language_picked: null,
    docblock_lang: "js",
    js_sample: Sample.sample_text_js,
    php_sample: Sample.sample_text_php,
    copy: mdiContentCopy,
  }),
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

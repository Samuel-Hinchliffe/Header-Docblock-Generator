<template>
  <v-col>
    <v-card class="elevation-12" rounded="lg">
      <v-toolbar dark>
        <v-toolbar-title class="v-center">Page Level DocBlock</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on" v-clipboard="text_prop">
              <v-icon>{{ copy }}</v-icon>
            </v-btn>
          </template>
          <span>Copy to clipboard</span>
        </v-tooltip>
      </v-toolbar>

      <code-highlight class="pa-5">
        <pre ref="textToCopy"
          >{{ text_prop }}
          </pre
        >
      </code-highlight>
    </v-card>
  </v-col>
</template>
<script>
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/duotone-sea.css";
import "vue-code-highlight/themes/window.css";
import { clipboard } from "vue-clipboards";
import { mdiContentCopy } from "@mdi/js";

export default {
  props: ["text_prop"],

  data() {
    return {
      copy: mdiContentCopy,
    };
  },

  components: {
    CodeHighlight,
  },

  directives: {
    clipboard,
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

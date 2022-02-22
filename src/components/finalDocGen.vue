<template>
  <v-col class="col">
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

      <div class="pa-5">
        <pre
          class="language-javascript"
        ><code class=" language-javascript text-col"> {{text_prop}}</code></pre>
      </div>
    </v-card>
  </v-col>
</template>
<script>
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

  directives: {
    clipboard,
  },
};
</script>

<style lang="scss">
.theme--dark.v-application code {
  background-color: rgba(255, 255, 255, 0);
  color: #e2e2e2 !important;
}

.text-col {
  color: #e2e2e2;
}

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
.v-application code,
.v-application kbd {
  border-radius: 3px;
  font-size: unset;
  font-weight: normal;
}

div pre[class*="language-"] {
  display: inline-block;
  width: 100%;
  padding-right: 1em;
  padding-top: 3rem;
  border-radius: 6px;
  background-image: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fillRule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="%23FF5F56" stroke="%23E0443E" strokeWidth=".5" /><circle cx="26" cy="6" r="6" fill="%23FFBD2E" stroke="%23DEA123" strokeWidth=".5" /><circle cx="46" cy="6" r="6" fill="%2327C93F" stroke="%231AAB29" strokeWidth=".5" /></g></svg>');
  background-repeat: no-repeat;
  background-position: 16px 16px;
  -webkit-box-shadow: 5px 5px 15px 0px rgba(50, 50, 50, 0.75);
  box-shadow: 5px 5px 15px 0px rgba(50, 50, 50, 0.75);
}
</style>

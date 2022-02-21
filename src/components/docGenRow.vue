<template>
  <v-row>
    <v-col class="col">
      <v-card class="elevation-12" rounded="lg" v-if="!language_picked">
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

      <v-card
        class="elevation-12"
        rounded="lg"
        v-if="language_picked && docblock_options.docblock_lang === 'php'"
      >
        <v-toolbar dark r class="v-center">
          <v-toolbar-title class="v-center">
            <v-btn icon v-on:click="go_back()" left>
              <v-icon>{{ back_arrow }}</v-icon>
            </v-btn>

            PHP Options</v-toolbar-title
          >
        </v-toolbar>
        <v-card-text
          >Fill out the details below and watch the DocBlock automatically
          update</v-card-text
        >
        <div
          style="display: flex; justify-content: space-evenly; flex-wrap: wrap"
          class="pa-1"
        >
          <v-btn depressed color="primary" v-on:click="php_doc.clear_fields()">
            Clear Form
          </v-btn>
          <v-btn depressed color="primary" v-on:click="php_doc.load_default()">
            Restore Default
          </v-btn>
        </div>
        <div
          style="
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            flex-direction: column;
          "
          class="pa-5"
        >
          <v-row justify="space-around">
            <v-col cols="12" lg="6">
              <v-text-field
                label="Company Name"
                v-model="php_doc.company_name"
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="6">
              <v-form ref="form">
                <v-text-field
                  label="Author Name"
                  v-model="php_doc.author_name"
                ></v-text-field>
              </v-form>
            </v-col>
          </v-row>

          <v-row justify="space-around">
            <v-col cols="12" lg="6">
              <v-text-field
                label="Work Email"
                v-model="php_doc.work_email"
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="6">
              <v-form ref="form">
                <v-text-field
                  label="Personal Email"
                  v-model="php_doc.personal_email"
                ></v-text-field>
              </v-form>
            </v-col>
          </v-row>

          <v-row justify="space-around">
            <v-col cols="12" lg="6">
              <v-text-field
                label="Personal Linkedin URL"
                v-model="php_doc.personal_linkedin"
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="6">
              <v-form ref="form">
                <v-text-field
                  label="Software Version"
                  v-model="php_doc.version"
                ></v-text-field>
              </v-form>
            </v-col>
          </v-row>

          <v-row justify="space-around">
            <v-col cols="12" lg="6">
              <v-text-field
                label="Package Name / Namespace"
                v-model="php_doc.package"
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="6">
              <v-form ref="form">
                <v-text-field
                  label="Summary See URL"
                  v-model="php_doc.see_summary_link"
                ></v-text-field>
              </v-form>
            </v-col>
          </v-row>

          <v-row justify="space-around">
            <v-col cols="12" lg="6">
              <v-text-field
                label="Company Website"
                v-model="php_doc.company_website"
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="6">
              <v-form ref="form">
                <v-text-field
                  label="Copyright Date"
                  v-model="php_doc.copyright"
                ></v-text-field>
              </v-form>
            </v-col>
          </v-row>

          <v-row justify="space-around">
            <v-col cols="12" lg="6">
              <v-text-field
                label="Licence"
                v-model="php_doc.license"
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="6">
              <v-form ref="form">
                <v-text-field
                  label="Overview"
                  v-model="php_doc.summary"
                ></v-text-field>
              </v-form>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" lg="6">
              <v-text-field
                label="Second See Link"
                v-model="php_doc.second_see_link"
              ></v-text-field>
            </v-col>
          </v-row>
        </div>
      </v-card>

      <v-card
        class="elevation-12"
        rounded="lg"
        v-if="language_picked && docblock_options.docblock_lang === 'js'"
      >
        <v-toolbar dark r class="v-center">
          <v-toolbar-title class="v-center">
            <v-btn icon v-on:click="go_back()" left>
              <v-icon>{{ back_arrow }}</v-icon>
            </v-btn>
          </v-toolbar-title>
        </v-toolbar>
        <v-card-text
          >Pick a language in which you wish to generate your page level doc
        </v-card-text>
        <v-card-text style="display: flex; justify-content: center">
          I AM THE JS
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
import Page_Doc_JS from "../classes/Page_Doc_JS";
import sampleDocGen from "./sampleDocGen.vue";
import "vue-code-highlight/themes/duotone-sea.css";
import Sample from "../classes/Sample.js";
import "vue-code-highlight/themes/window.css";
import finalDocGen from "./finalDocGen.vue";
import { mdiArrowLeftBoldCircle } from "@mdi/js";
import Docblock_Storage from "../classes/DocBlock_Storage.js";

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
    back_arrow: mdiArrowLeftBoldCircle,
    docGen_area: ``,
    docblock_lang: "js",
    js_sample: Sample.sample_text_js,
    php_sample: Sample.sample_text_php,
    textblock: String,
    php_doc: Object,
    js_doc: Object,
    doc_storage: new Docblock_Storage(),

    docblock_options: {
      textblock: Sample.sample_text_js,
      docblock_lang: "js",
    },
  }),

  watch: {
    php_doc: {
      // This will let Vue know to look inside the array
      deep: true,

      // We have to move our method to a handler field
      handler() {
        this.docblock_options.textblock = this.php_doc.build();
        this.doc_storage.add_2_local_storage(this.php_doc, "php_doc");
      },
    },
  },

  methods: {
    go_back() {
      this.docblock_lang = null;
      this.docblock_options.docblock_lang = null;
      this.language_picked = false;
    },

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
      this.docblock_options.docblock_lang = "js";
      this.language_picked = true;

      // Is this already populated?
      if (this.doc_storage?.Docblock_Storage?.name === "script 2") {
        this.js_doc = new Page_Doc_JS("script 2");
        this.js_doc.load_from_storage(this.js_doc.Docblock_Storage);
      } else {
        this.js_doc = new Page_Doc_JS("script 2");
        this.docblock_options.textblock = this.js_doc.init_text();
        console.log(this.js_doc);
      }
    },
    php_selected() {
      this.docblock_options.docblock_lang = "php";
      this.language_picked = true;

      // Is this already populated?
      if (this.doc_storage?.Docblock_Storage?.name === "script 1") {
        this.php_doc = new Page_Doc_PHP("script 1");
        this.php_doc.load_from_storage(this.doc_storage.Docblock_Storage);
      } else {
        this.php_doc = new Page_Doc_PHP("script 1");
        this.docblock_options.textblock = this.php_doc.init_text();
        console.log(this.php_doc);
      }
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
  .v-icon__svg:hover {
    fill: white;
  }
}
</style>

/**
 * @author Samuel Hinchliffe <sam.hinchliffe.work@gmail.com>
 * @see    {@link linkedin.com/in/samuel-hinchliffe-🚀-2bb5801a5/ | Author's Linkedin }
 *
 * @version 1.0.0
 * @since File available since Release 1.0.0
 * @see {@link https://github.com/Samuel-Hinchliffe/Header-Docblock-Generator }
 * @file This is where everything really begins. See below the global imports
 * for this application. Then mounting. If you're familiar with Vue you already
 * know what this file does.
 *
 * Created at: 23/2/2022
 * @license MIT
 */

import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import vuetify from "./plugins/vuetify";
import VueCodeHighlight from "vue-code-highlight";
import VueClipboards from "vue-clipboards";
Vue.use(VueClipboards);

Vue.use(VueCodeHighlight);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

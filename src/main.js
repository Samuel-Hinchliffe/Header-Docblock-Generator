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

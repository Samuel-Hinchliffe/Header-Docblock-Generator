/**
 * @author Samuel Hinchliffe <sam.hinchliffe.work@gmail.com>
 * @see    {@link linkedin.com/in/samuel-hinchliffe-🚀-2bb5801a5/ | Author's Linkedin }
 *
 * @version 1.0.0
 * @since File available since Release 1.0.0
 * @see {@link https://github.com/Samuel-Hinchliffe/Header-Docblock-Generator }
 * @file This file is the Vuetify configuration file. We have set Vuetify to use a
 * dark theme with a set of icons.
 *
 * Created at: 23/2/2022
 * @license MIT
 */

import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: { dark: true },
  icons: {
    iconfont: "mdiSvg",
  },
});

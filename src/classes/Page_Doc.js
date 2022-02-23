/**
 * @author Samuel Hinchliffe <sam.hinchliffe.work@gmail.com>
 * @see    {@link linkedin.com/in/samuel-hinchliffe-🚀-2bb5801a5/ | Author's Linkedin }
 *
 * @version 1.0.0
 * @since File available since Release 1.0.0
 * @see {@link https://github.com/Samuel-Hinchliffe/Header-Docblock-Generator }
 * @file This file is used to serve us up the Pagedocs. This is stored in the localstorage
 * so we can read from it and gather which Icon it should have, which docblock to have etc.
 *
 * Created at: 23/2/2022
 * @license MIT
 */

/* eslint-disable prettier/prettier */
import { mdiLanguagePhp }        from "@mdi/js";
import { mdiLanguageJavascript } from "@mdi/js";

export default class Page_Doc {
  constructor(name, language, language_icon = null) {
    this.name          = name;
    this.language      = language;
    this.language_icon = language_icon || this.get_lang_icon();
    this.docblock      = null;
  }

  get_lang_icon() {
    switch (this.language) {
      case "js": 
        return mdiLanguageJavascript;
      case "php": 
        return mdiLanguagePhp;
      default: 
        break;
    }
  }
}

/**
 * @author Samuel Hinchliffe <sam.hinchliffe.work@gmail.com>
 * @see    [Linkedin] {@link https://www.linkedin.com/in/samuel-hinchliffe-2bb5801a5/}
 *
 * @summary The parent class.
 * @todo Implement the base parent class.
 *
 * Created at: 12/02/2022
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
      case "js" : 
        return mdiLanguageJavascript;
      case "php": 
        return mdiLanguagePhp;
      default   : 
        break;
    }
  }
}

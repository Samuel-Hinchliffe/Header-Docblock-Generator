/**
 * @author Samuel Hinchliffe <sam.hinchliffe.work@gmail.com>
 * @see    {@link linkedin.com/in/samuel-hinchliffe-🚀-2bb5801a5/ | Author's Linkedin }
 *
 * @version 1.0.0
 * @since File available since Release 1.0.0
 * @see {@link https://github.com/Samuel-Hinchliffe/Header-Docblock-Generator }
 * @file This file is where we use a handful of function to read and write page docs
 * to localstorage.
 *
 * Created at: 23/2/2022
 * @license MIT
 */
export default class Docblock_Storage {
  constructor(docBlock_class = null) {
    this.docBlock_class = docBlock_class;
    this.Docblock_Storage = this.get_docblock_from_local();
    this.Docblock_Storage_js = this.js_docblock_get();
  }

  get_docblock_from_local() {
    let localstorage_Docblocks = null;

    try {
      localstorage_Docblocks = JSON.parse(localStorage.getItem("php_doc"));
    } catch (error) {
      console.log(error);
      console.log("Not valid or no docblocks.");
    }

    console.log(localstorage_Docblocks);

    return localstorage_Docblocks;
  }

  js_docblock_get() {
    let localstorage_Docblocks = null;

    try {
      localstorage_Docblocks = JSON.parse(localStorage.getItem("js_doc"));
    } catch (error) {
      console.log(error);
      console.log("Not valid or no docblocks.");
    }

    console.log(localstorage_Docblocks);

    return localstorage_Docblocks;
  }

  add_2_local_storage(docBlock_class, type) {
    let already_exists = false;

    localStorage.setItem(type, JSON.stringify(docBlock_class));

    return already_exists;
  }
}

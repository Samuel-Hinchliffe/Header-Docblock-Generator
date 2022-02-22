/**
 * @author Samuel Hinchliffe <sam.hinchliffe.work@gmail.com>
 * @see    [Linkedin] {@link https://www.linkedin.com/in/samuel-hinchliffe-2bb5801a5/}
 *
 * @summary The parent class.
 * @todo Implement the base parent class.
 *
 * Created at: 12/02/2022
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

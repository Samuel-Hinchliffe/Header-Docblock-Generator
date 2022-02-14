/* The parent class */
/* eslint-disable prettier/prettier */
/**
 * @author Samuel Hinchliffe <sam.hinchliffe.work@gmail.com>
 * @see    [Linkedin] {@link https://www.linkedin.com/in/samuel-hinchliffe-2bb5801a5/}
 *
 * @summary The parent class.
 * @todo Implement the base parent class.
 *
 * Created at: 12/02/2022
 */

import Page_Doc from "./Page_Doc";

export default class Page_Doc_PHP extends Page_Doc {
  constructor(name) {
    super(name, "php");

    // Line vars
    this.spacer = "   ";
    this.company_name = "Medici";
    this.author_name = "Machiavelli";
    this.work_email = "machiavelli@medici.gov";
    this.personal_email = "machii@hotmail.com";
    this.personal_linkedin = "linkedin.com/feed/";

    // Line enabled or not
    this.created_by_enabled = true;
    this.author_line_enabled = true;
    this.linked_line_enabled = true;

    // Lines
    this.line_created_by_company = this.generate_created_by() || "";
    this.line_author = this.generate_email_author() || "";
    this.line_linkedin = this.generate_personal_linkedin() || "";
  }

  generate_created_by() {
    if (this.company_name && this.created_by_enabled) {
      return `\n${this.spacer}* Created by ${this.company_name}`;
    }
  }

  generate_personal_linkedin() {
    if (this.linked_line_enabled) {
      return this.personal_linkedin
        ? `\n${this.spacer}* @link ${this.personal_linkedin} Author's Linkedin `
        : "";
    }
  }

  generate_email_author() {
    if (this.author_line_enabled) {
      if (this.personal_email && this.work_email && this.author_name) {
        // Return work_email, personal_email and author_name.
        return ` \n${this.spacer}* @author ${this.author_name} <${this.work_email}>\n${this.spacer}* @author ${this.author_name} <${this.personal_email}> `;
      } else if (!this.author_name) {
        // Cannot have links without author name
        return "";
      } else if (this.author_name && this.personal_email) {
        // Return author name and personal email
        return ` \n${this.spacer}* @author ${this.author_name} <${this.personal_email}>`;
      } else if (this.author_name && this.work_email) {
        // Return author name and work email
        return ` \n${this.spacer}* @author ${this.author_name} <${this.work_email}>`;
      } else {
        return ` \n${this.spacer}* @author ${this.author_name}`;
      }
    }
  }

  init_text() {
    return `/** ${this.line_created_by_company}${this.line_author}${this.line_linkedin}
   *
   * @version 1.0.0
   * @overview This is the header documentation for the header documentation generator.
   * Something like this will be generated. You should put this at the top of the file
   * that you're working on. 
   * 
   * Created at: 12/02/2022
   * @see    [Website]  {@link https://genrandom.com/cats/}
   * @see    [JSDOC]    {@link https://jsdoc.app/}
   * @copyright (c) 1999-2022 Samuel Hinchliffe Inc.
   * @license Apache-2.0
   */`;
  }
}

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
    this.load_default()
  }

  clear_fields(){
    this.spacer = "   ";
    this.company_name = "";
    this.author_name = "";
    this.work_email = "";
    this.personal_email = "";
    this.personal_linkedin = "";
    this.version = "";
    this.package = "";
    this.since_file_created = `${this.version}`;
    this.see_summary_link = ``;
    this.summary = "";
    this.created_at_time = "";
    this.company_website = "";
    this.second_see_link = "";
    this.copyright = ``;
    this.license = "";
    this.build()
  }

  load_default(){
    // Line vars
    this.spacer = "   ";
    this.company_name = "Medici";
    this.author_name = "Machiavelli";
    this.work_email = "machiavelli@medici.gov";
    this.personal_email = "machii@hotmail.com";
    this.personal_linkedin = "linkedin.com";
    this.version = "1.2.1";
    this.package = "Medici JWT APIs";
    this.since_file_created = `${this.version}`;
    this.see_summary_link = `https://en.wikipedia.org/wiki/Special:Random`;
    this.summary = "A summary of this file. Whatever that may be. ";
    this.created_at_time = "";
    this.company_website = "www.google.com";
    this.second_see_link = "www.phpdoc.org";
    this.copyright = `Copyright (c) 1999-2022 ${this.company_name}`;
    this.license = "Apache-2.0";

    // Alignment

    // Line enabled or not
    this.created_by_enabled = true;
    this.author_line_enabled = true;
    this.linked_line_enabled = true;
    this.version_line_enabled = true;
    this.package_line_enabled = true;
    this.since_file_created_line_enabled = true;
    this.see_summary_link_enabled = true;
    this.summary_enabled = true;
    this.created_at_time_enabled = true;
    this.company_website_enabled = true;
    this.second_see_link_enabled = true;
    this.copyright_enabled = true;
    this.license_enabled = true;

    // Lines
    this.build();
  }

  load_from_storage(obj){
    console.log('loading from storage');
    console.log(obj)
    this.spacer = obj.spacer;
    this.company_name = obj.company_name;
    this.author_name = obj.author_name;
    this.work_email = obj.work_email;
    this.personal_email = obj.personal_email;
    this.personal_linkedin = obj.personal_linkedin
    this.version = obj.version;
    this.package = obj.package;
    this.since_file_created = obj.since_file_created;
    this.see_summary_link = obj.see_summary_link;
    this.summary = obj.summary;
    this.created_at_time = obj.created_at_time;
    this.company_website = obj.company_website;
    this.second_see_link = obj.second_see_link;
    this.copyright = obj.copyright
    this.license = obj.license;

    // Lines
    this.build();
  }

  build() {
    this.line_created_by_company = this.generate_created_by() || "";
    this.line_author = this.generate_email_author() || "";
    this.line_linkedin = this.generate_personal_linkedin() || "";

    this.line_version = this.generate_version() || "";
    this.line_package = this.generate_package() || "";
    this.line_since_file_created = this.generate_since_file_created() || "";
    this.line_summary_link = this.generate_see_summary_link() || "";
    this.line_summary = this.generate_see_summary() || "";

    this.line_created_at_time = this.generate_date() || "";
    this.line_company_website = this.generate_company_website() || "";
    this.line_second_see_line = this.generate_second_see_link() || "";
    this.line_copyright = this.generate_copyright_line() || "";
    this.line_license = this.generate_license() || "";
    return this.init_text();
  }

  generate_license() {
    if (this.license_enabled && this.license) {
      return `\n${this.spacer}* @license ${this.license}`;
    }
  }

  generate_copyright_line() {
    if (this.copyright && this.copyright_enabled && this.company_name) {
      this.copyright = `Copyright (c) 1999-2022 ${this.company_name}`;

      return `\n${this.spacer}* @copyright ${this.copyright}`;
    }
  }

  generate_second_see_link() {
    if (this.second_see_link && this.second_see_link_enabled) {
      return `\n${this.spacer}* @see ${this.second_see_link}`;
    }
  }

  generate_company_website() {
    if (this.company_website_enabled && this.company_website) {
      return `\n${this.spacer}* @see ${this.company_website} Website`;
    }
  }

  generate_date() {
    if (this.created_at_time_enabled) {
      let date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      return `\n${this.spacer}* Created at: ${day}/${month}/${year}`;
    }
  }

  generate_see_summary() {
    if (this.summary && this.summary_enabled) {
      return `\n${this.spacer}* @overview ${this.summary}`;
    }
  }

  generate_see_summary_link() {
    if (this.see_summary_link && this.see_summary_link_enabled) {
      return `\n${this.spacer}* @see ${this.see_summary_link}`;
    }
  }

  generate_since_file_created() {
    this.since_file_created = this.version;
    if (this.since_file_created && this.since_file_created_line_enabled) {
      return `\n${this.spacer}* @since File available since Release ${this.since_file_created}`;
    }
  }

  generate_package() {
    if (this.package && this.package_line_enabled) {
      return `\n${this.spacer}* @package ${this.package}`;
    }
  }

  generate_created_by() {
    if (this.company_name && this.created_by_enabled) {
      return `\n${this.spacer}* Created by ${this.company_name}`;
    }
  }

  generate_version() {
    if (this.version_line_enabled && this.version) {
      return `\n${this.spacer}* @version ${this.version}`;
    }
  }

  generate_personal_linkedin() {
    if (this.linked_line_enabled) {
      return this.personal_linkedin
        ? `\n${this.spacer}* @link   ${this.personal_linkedin} Author's Linkedin `
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
   *${this.line_version}${this.line_package}${this.line_since_file_created}${this.line_summary_link}${this.line_summary}
   * ${this.line_created_at_time}${this.line_company_website}${this.line_second_see_line}${this.line_copyright}${this.line_license}
  */`;
  }
}

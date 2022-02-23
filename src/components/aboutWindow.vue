<template>
  <transition name="fade">
    <v-col>
      <v-card class="elevation-12" rounded="lg">
        <v-toolbar dark r class="v-center">
          <v-toolbar-title class="v-center"
            ><v-icon left> {{ about }} </v-icon> About</v-toolbar-title
          >
        </v-toolbar>
        <v-subheader>What is this?</v-subheader>
        <v-card-text
          >It's a tool. A tool designed to generate Page-Level documentation.
          Have you ever wondered who made a file? What does the file do? When it
          was made? Who owns it and what its licence is? Today we normally just
          check the Github README.md to find out. It wasn't so long ago that
          most files had all of these details just at the top of the file. A
          greeting in the form of documentation. It told us everything we needed
          to know about this file without having to go deep into the code. If
          you've ever looked back at the code of old legacy systems, especially
          anything in ASM. You'll see that almost all of them had these header
          Docblocks that told us everything about the code itself and the
          details to contact whoever made this
          <div class="text-center ma-5" ma-5>
            <v-btn
              rounded
              color="primary"
              dark
              v-on:click="$emit('perma_hide_about')"
            >
              Let's get started!</v-btn
            >
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </transition>
</template>

<script>
/**
 * @author Samuel Hinchliffe <sam.hinchliffe.work@gmail.com>
 * @see    {@link linkedin.com/in/samuel-hinchliffe-🚀-2bb5801a5/ | Author's Linkedin }
 *
 * @version 1.0.0
 * @since File available since Release 1.0.0
 * @see {@link https://github.com/Samuel-Hinchliffe/Header-Docblock-Generator }
 * @file This file is the about window. This file is currently not in use.
 *
 * Created at: 23/2/2022
 * @license MIT
 */

import { mdiInformationOutline } from "@mdi/js";
export default {
  data: () => ({
    about: mdiInformationOutline,
  }),
};
</script>

<style lang="scss">
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

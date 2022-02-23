<template>
  <v-app id="inspire">
    <v-app-bar app flat> </v-app-bar>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268">
              <v-card elevation="2">
                <v-card-title> Sorry, mobile is unavailable</v-card-title>
                <v-card-subtitle>Here is why</v-card-subtitle>
                <v-card-text>
                  The reason this application doesn't support mobile is because
                  the comments that are generated are designed to maintain their
                  indentation and style. Having this on mobile would cause
                  overflow. Which is a unpleasant experience to you. Which I
                  wouldn't want to effect your view of the application. Please
                  use this on desktop. :D
                </v-card-text>
                <v-card-actions> </v-card-actions>
              </v-card>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
/**
 * @author Samuel Hinchliffe <sam.hinchliffe.work@gmail.com>
 * @see    {@link linkedin.com/in/samuel-hinchliffe-🚀-2bb5801a5/ | Author's Linkedin }
 *
 * @version 1.0.0
 * @since File available since Release 1.0.0
 * @see {@link https://github.com/Samuel-Hinchliffe/Header-Docblock-Generator }
 * @file This file is what's shown to mobile users. < 768px. The reason for this is because.
 * I don't want users to use application that will leave them with a sour experience. This application
 * will do that on mobile.
 *
 * Created at: 23/2/2022
 * @license MIT
 */
</script>

<style lang="scss">
a {
  .v-icon__svg {
    transition: 200ms ease-in-out;
  }
  .v-icon__svg:hover {
    fill: white;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>

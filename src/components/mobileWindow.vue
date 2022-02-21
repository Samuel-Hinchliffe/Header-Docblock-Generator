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
<script></script>

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

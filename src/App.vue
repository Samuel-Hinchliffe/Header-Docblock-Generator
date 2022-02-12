<template>
  <v-app>
    <v-main>
      <MainWindow />
    </v-main>
  </v-app>
</template>

<script>
import MainWindow from "./components/MainWindow";

export default {
  name: "App",

  components: {
    MainWindow,
  },

  data: () => ({
    //
  }),
};
</script>

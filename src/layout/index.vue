<template lang="pug">
#container
  Nav(:title="key")
  app-main
  Aside
</template>

<script>
import Nav from "./_components/Nav.vue";
import AppMain from "./_components/AppMain.vue";
import Aside from "./_components/Aside.vue";

export default {
  components: {
    Nav,
    AppMain,
    Aside,
  },
  computed: {
    key() {
      console.log("pages :", this.$route.meta.title);
      return this.$route.meta.title;
    },
  },
};
</script>

<style lang="scss" scoped>
/*  */
</style>

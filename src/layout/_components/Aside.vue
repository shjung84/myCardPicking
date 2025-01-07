<template lang="pug">
.c-quick -

</template>

<script>
export default {
  name: "MyDevice",
  components: {},
  data() {
    return {
      //
    };
  },
};
</script>

<style lang="scss" scoped>
.c-quick {
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  width: 200px;
  height: 100%;
  padding: 17px 20px;
  &__inner {
    position: relative;
    height: 100%;
    .sec {
      padding: 10px;
      @include border-radius(15px);
    }
  }
}
</style>

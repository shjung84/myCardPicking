<template lang="pug">
nav
  h1 h1
  #lnb
    ul
      li(
        v-for="(item, i) of list"
        :key="i"

        )
        router-link(:to="item.link" @click="getMenu(i)")
          mdicon(:name="item.icon" size="15")
          em {{ i }} : {{ item.name }}
      li(class="logout")
        a(href="javascript:;" title="Logout") #[mdicon(name="power" size="15")] #[em Logout]
    .slide-bar(:style="getStyles")
</template>

<script>
// import { ref } from "vue";

export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  watch: {
    $route(to, from) {
      console.log(to.fullPath, from.fullPath);
    },
  },
  setup() {
    // const newCurrent = ref(0);
    // const getMenu = idx => {
    //   // newCurrent.value = idx;
    //   document.getElementsByClassName("slide-bar")[0].style.top = idx * 35 + "px";
    //   console.log(idx);
    // };
    // return {
    //   // newCurrent,
    //   getMenu,
    // };
  },
  data() {
    return {
      setPosition: 0,
      list: [
        {
          name: "MainPage",
          link: "/MainPage",
          icon: "chart-donut-variant",
        },
        {
          name: "Rooms",
          link: "/Rooms",
          icon: "door-open",
        },
        {
          name: "Devices",
          link: "/Devices",
          icon: "cellphone-link",
        },
        {
          name: "Members",
          link: "/Members",
          icon: "account-group-outline",
        },
      ],
    };
  },
  mounted() {
    this.init();
  },
  computed: {
    key() {
      // console.log("Nav :", this.$route.fullPath);
      // return this.$route.fullPath;
      console.log("Nav :", this.$route.name);
      return this.$route.name;
    },
    positionTop() {
      return `${this.setPosition}px`;
    },
    getStyles() {
      return [{ top: this.positionTop }];
    },
  },
  methods: {
    init() {
      console.log(`this.title : ${this.title}`);
      console.log(`this.menuLength : ${this.list.length}`);
    },
    getMenu(idx) {
      this.setPosition = 35 * idx;
      console.log(`this.setPosition : ${this.setPosition}`);
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  flex: none;
  position: relative;
  z-index: 2;
  width: 150px;
  padding: 100px 15px 30px;

  h1 {
    position: absolute;
    top: 30px;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 0;

    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      width: 40px;
      height: 40px;
      background-color: var(--color-bg-opacity-5);
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
    }
    &:before {
      left: 50%;
      margin-left: -10px;
    }
    &:after {
      right: 50%;
      margin-right: -10px;
    }
  }

  #lnb {
    display: flex;
    position: relative;
    width: 100%;
    ul {
      display: flex;
      flex-direction: column;
      flex-basis: 100%;
      position: relative;
      z-index: 2;
      width: 100%;
      /* background-color: #fcc; */
      li {
        position: relative;
        margin-right: -15px;
        height: 35px;
        &.logout {
          margin-top: auto;
        }
        a {
          display: block;
          padding: 10px 10px 10px 15px;
          color: var(--color-bg);
          em {
            vertical-align: middle;
          }
          .mdi + em {
            margin-left: 7px;
          }
          &.router-link-active {
            color: var(--color-theme);
            color: var(--color);
            font-weight: bold;
            transition: all 0.1s ease-out;
          }
        }
      }
    }
    .slide-bar {
      position: absolute;
      top: 0;
      right: -15px;
      left: 0;
      z-index: 1;
      height: 35px;
      background-color: var(--color-slidebar);
      border-radius: 30px 0 0 30px;
      transition: top 0.1s ease-out;
      &:before,
      &:after {
        content: "";
        position: absolute;
        right: 0;
        width: 30px;
        height: 30px;
        background-color: var(--color-slidebar);
      }
      &:before {
        bottom: 100%;
        background: radial-gradient(circle at 0 0, transparent 30px, var(--color-slidebar) 30px);
      }
      &:after {
        top: 100%;
        background: radial-gradient(circle at 0 100%, transparent 30px, var(--color-slidebar) 30px);
      }
    }
  }
}
</style>

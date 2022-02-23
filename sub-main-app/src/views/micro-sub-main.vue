<template>
  <div id="subAppContainer"></div>
</template>

<script>
// import { registerMicroApps, start } from "qiankun";
// let flag = false;
export default {
  name: "About",
  setup() {
    // registerMicroApps([
    //   {
    //     name: "app-vue-hash",
    //     entry: "http://localhost:7105",
    //     container: "#subAppContainer",
    //     activeRule: window.__POWERED_BY_QIANKUN_PARENT__
    //       ? "/app-qiankun/app-vue-history/sub-app-1"
    //       : "/app-vue-history/sub-app-1",
    //     props: { data: { a: 1 } },
    //   },
    //   {
    //     name: "app-vue-history",
    //     entry: "http://localhost:7106",
    //     container: "#subAppContainer",
    //     activeRule: window.__POWERED_BY_QIANKUN_PARENT__
    //       ? "/app-qiankun/app-vue-history/sub-app-2"
    //       : "/app-vue-history/sub-app-2",
    //     props: { a: 1 },
    //   },
    // ]);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about-content {
  color: #7265e6;
}
</style>

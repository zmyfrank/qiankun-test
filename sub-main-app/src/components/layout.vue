<template>
  <div class="layout">
    <header>我来组成头部</header>
    <router-view />
    <footer>我来组成底部</footer>
  </div>
</template>

<script>
export default {
  name: "Layout",
  setup() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about-content {
  color: #7265e6;
}
</style>

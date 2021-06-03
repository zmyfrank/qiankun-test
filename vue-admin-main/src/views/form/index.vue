<template>
  <div id="appContainer" ref="microApp">容器</div>
</template>

<script>
import {
  start,
  loadMicroApp } from 'qiankun'
export default {
  components: {},
  data() {
    return {
      subApp: null
    }
  },
  created() {},
  mounted() {
     if(!window.isQiankunStart){
      window.isQiankunStart = true;
      start();
    }
    // start()
    // this.subApp = loadMicroApp({
    //   name: 'microApp-A',
    //   entry: '//localhost:9529/microApp/',
    //   container: this.$refs.microApp
    // })
  },
  destroyed() {
  },
  methods: {}
}
</script>
<style scoped lang="scss">
</style>

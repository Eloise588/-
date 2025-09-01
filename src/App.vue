<template>
  <div id="app">
  <router-view></router-view>
  </div>
  
</template>

<script setup>

</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0; /* 移除顶部默认边距 */
  min-height: 100vh; /* 确保占满屏幕高度 */
  box-sizing: border-box;
  overflow-x: hidden; /* 防止横向滚动 */
}
</style>
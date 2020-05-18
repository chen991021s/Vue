<template>
  <div id="app">
    <tab>
      <tabitem>
        <img src="./assets/img/tab/home.png" alt="" slot="item_img">
        <p>首页</p>
      </tabitem>
      <tabitem></tabitem>
      <tabitem></tabitem>
      <tabitem></tabitem>
    </tab>
  </div>
</template>

<script>
import tab from './components/tab/tab.vue'
import tabitem from './components/tab/tabitem.vue'
export default {
  name:'app',
  components:{
    tab,
    tabitem
  }
}
</script>
<style>
@import "./assets/css/app.css";

</style>

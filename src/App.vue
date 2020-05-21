<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>   
    <mianapptab></mianapptab>
  </div>
</template>

<script>
// @指向src文件夹 在vue.config.js中被定别名
import mianapptab from 'components/content/maintab/mianapptab.vue'
export default {
  name:'app',
  components:{
    mianapptab
  }
}
</script>
<style>
@import "assets/css/app.css";

</style>

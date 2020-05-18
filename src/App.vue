<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>   
    <mianapptab></mianapptab>
  </div>
</template>

<script>
// @指向src文件夹 在webpack中被定义了
import mianapptab from '@/components/mianapptab.vue'
export default {
  name:'app',
  components:{
    mianapptab
  }
}
</script>
<style>
@import "./assets/css/app.css";

</style>

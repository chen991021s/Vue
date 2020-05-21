<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>   
    <mianapptab></mianapptab>
  </div>
</template>

<script>
//在vue.config.js中被定别名
import mianapptab from 'components/content/maintab/mianapptab'
export default {
  name:'app',
  components:{
    mianapptab
  }
}
</script>
<style>
@import "assets/css/app";

</style>

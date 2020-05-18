<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>   
    <mianapptab></mianapptab>
  </div>
</template>

<script>
import mianapptab from './components/mianapptab.vue'
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

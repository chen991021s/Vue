<template>
<!-- 使用最下面组件 -->
     <tab>
      <tabitem path='/Home'>
        <img src="~assets/img/tab/home.png" alt="" slot="item-img">
         <img src="~assets/img/tab/home1.png" alt="" slot="item-img-active">
        <p slot="item-text">首页</p>
      </tabitem>
      <!-- <tabitem path='/Fen' activeColor='red'> 动态换文字颜色-->
      <tabitem path='/Fen'>
        <img src="~assets/img/tab/fen.png" alt="" slot="item-img">
         <img src="~assets/img/tab/fen1.png" alt="" slot="item-img-active">
        <p slot="item-text">分类</p>
      </tabitem>
      <tabitem path='/Car'>
        <img src="~assets/img/tab/car.png" alt="" slot="item-img">
         <img src="~assets/img/tab/car1.png" alt="" slot="item-img-active">
        <p slot="item-text">购物车</p>
      </tabitem>
      <tabitem path='/My'>
        <img src="~assets/img/tab/my.png" alt="" slot="item-img">
         <img src="~assets/img/tab/my1.png" alt="" slot="item-img-active">
        <p slot="item-text">我的</p>
      </tabitem>
    </tab>
</template>
<script>
import tab from 'components/common/tab/tab.vue'
import tabitem from 'components/common/tab/tabitem.vue'
export default {
    name:'mainapptab',
    components:{
    tab,
    tabitem
  }
}
</script>
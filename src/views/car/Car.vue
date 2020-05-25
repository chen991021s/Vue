<template>
    <div id="car">
         <!-- 头部 -->
        <navtab class="nav-bar">
            <div slot="content">购物车({{this.$store.state.catlist.length}})</div>
        </navtab> 
        <!-- 商品列表 -->
        <carlist/>  
        <catbottomlist/>
    </div>   
</template>
<script>
import navtab from 'components/common/navtab/navtab'
import catbottomlist from './carlist/catbottomlist.vue'
import carlist from './carlist/carlist.vue'

export default {
    name:'Car',
    components:{
        navtab,
        carlist,
        catbottomlist
    }
}
</script>
<style scoped>
#car{
    position: relative;
    height: 100vh; /**视口高度 */
}
.nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    margin-bottom: 1px;
    width: 100vw;
    z-index: 999;
    position:fixed;
  }
 
</style>
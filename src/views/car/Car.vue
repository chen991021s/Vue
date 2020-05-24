<template>
    <navtab class="nav-bar">
            <div slot="content">购物车</div>
    </navtab>
</template>
<script>
import navtab from 'components/common/navtab/navtab'
export default {
    name:'Car',
    components:{
        navtab
    }
}
</script>
<style scoped>
.nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    margin-bottom: 1px;
  }
</style>
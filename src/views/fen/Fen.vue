<template>
    <div>
        <navtab class="nav-bar">
            <div slot="content">分类</div>
        </navtab>
    </div>
</template>
<script>
import navtab from 'components/common/navtab/navtab'

export default {
    name:'Fen',
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
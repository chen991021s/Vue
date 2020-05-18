<template>
<!-- 一个个小的组件 -->
    <div class="tab-item">
        <slot name="item-img"></slot>
        <slot name="item-text"></slot>
    </div>
</template>
<script>
export default {
    name:'tabitem'
}
</script>
<style scoped>
.tab-item{
    flex: 1;
    height: 49px;
    text-align: center;
    color: palevioletred;
    font-size: 14px;
}
img{
    width: 25px;
    height: 25px;
    margin-top:3px;
    vertical-align: middle;
}
</style>
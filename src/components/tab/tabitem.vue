<template>
    <div class="tab-item">
        <slot name="item_img"></slot>
        <slot name="item_text"><slot>
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
    line-height: 49px;
    color: palevioletred;
    font-size: 16px;
}
</style>
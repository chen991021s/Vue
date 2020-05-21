<template>
    <div class='navtab'>
        <!-- 使用div包裹住slot ,因为slot最终会被组件中的内容替换掉 -->
        <div class="left"><slot name="left"></slot></div>
        <div class="content"><slot name="content"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>
<script>
export default {
    name:'navtab'
}
</script>
<style scoped>
.navtab{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0px 2px 1px rgb(238, 213, 194,0.7);
}

.left , .right{
    width: 60px;
}
.content{
    flex: 1;

}

</style>
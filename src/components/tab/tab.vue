<template>
    <div id="tab">
        <div class="tab-item">首页</div>
        <div class="tab-item">首页</div>
        <div class="tab-item">首页</div>
        <div class="tab-item">首页</div>
    </div>
</template>
<style scoped>
#tab{
    display: flex;
    background-color: rgb(238, 213, 194);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px -3px 1px rgb(238, 213, 194,0.7);
}
.tab-item{
    flex: 1;
    height: 49px;
    text-align: center;
    line-height: 49px;
    color: palevioletred;
    font-size: 16px;
}
</style>
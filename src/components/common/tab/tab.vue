<template>
<!-- 最下面整个大的组件封装 -->
    <div id="tab">
        <!-- 最下面整个大的组件 -->
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'tab'
}
</script>
<style scoped>
#tab{
    display: flex;
    background-color: #ffffff;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px -3px 3px #ffffff;
    z-index:1000;
    height: 50px;
}

</style>
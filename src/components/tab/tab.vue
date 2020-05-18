<template>
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
    background-color: rgb(238, 223, 212);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px -3px 1px rgb(238, 213, 194,0.7);
}

</style>
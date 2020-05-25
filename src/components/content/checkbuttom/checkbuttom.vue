<template>
    <div id='check_btn'>
        <img src="~assets/img/cart/tick.svg" alt="" class="check_img" :class="{check:ischeck}">
    </div>
</template>
<script>
export default {
    name:'checkbuttom',
    props:{
        ischeck:{
            type:Boolean,
            default:false
        }
    }
}
</script>
<style scoped>
.check_img{
    width: 22px;
    height: 22px;
    border-radius:50%;
    text-align: center;
    line-height: 25px;
    border: 2px solid #aaaaaa;
}
.check{
    border-color:palevioletred;
    background-color: palevioletred;
}
</style>
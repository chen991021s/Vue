<template>
<!-- 一个个小的组件 -->
    <div class="tab-item" @click="actives">
        <div v-if="!isactive"><slot name="item-img"></slot></div>
        <div v-else><slot name="item-img-active"></slot></div>
        <div :class="{activecolor:isactive}"><slot name="item-text"></slot></div>
    </div>
</template>
<script>
export default {
    name:'tabitem',
    props:{
        path:String
    },
    data(){
        return{
            // isactive:false
        }
    },
    computed:{
        isactive(){
            //当前选中的路由是否包含我传入的路由 当不等于-1就包含
           return this.$route.path.indexOf(this.path) !== -1
        }
    },
    methods:{
        actives(){
            this.isactive= !this.isactive
            this.$router.push(this.path)
            console.log('ss')
        }
    }
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
.activecolor{
    color: #1296DB;
}
</style>
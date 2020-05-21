<template>
<!-- 一个个小的组件 -->
    <div class="tab-item" @click="actives">
        <div v-if="!isactive"><slot name="item-img"></slot></div>
        <div v-else><slot name="item-img-active"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>
<script>
export default {
    name:'tabitem',
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'#1296DB'
        }
    },
    data(){
        return{
            // isactive:false
        }
    },
    computed:{
        //动态判断是否是活跃状态（点击）
        isactive:{
            get(){
                //当前选中的路由是否包含我传入的路由 当不等于-1就包含
                return this.$route.path.indexOf(this.path) !== -1  //返回布尔值
            },
            set(){}
            
        },
        //动态添加文字颜色
        activeStyle(){
            //判断是否是活跃状态，如果是就添加color,不是就使用默认值空对象
            return this.isactive ? {color:this.activeColor}:{}
        }
    },
    methods:{
        actives(){
            this.isactive= !this.isactive
            this.$router.push(this.path)
            // console.log('ss')
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
</style>
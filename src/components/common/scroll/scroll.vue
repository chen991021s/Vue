<template>
<!-- 封装滑动效果 -->
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import BSscroll from 'better-scroll'
export default {
    name:'scroll',
    props:{
        probetype:{
            type:Number,
            defualt:0
        },
        pullupload:{
            type:Boolean,
            defualt:false
        }
    },
    data(){
        return{
            scroll:null
        }
    },
    methods:{
        //封装回到顶部的位置函数
        scrollto(x,y,time=100){
            this.scroll.scrollTo(x,y,time)
        },
         //封装多次调用
        finishPullUp(){
            this.scroll.finishPullUp()
        }
    },
    mounted(){
        //创建BScroll实例
        this.scroll = new BSscroll(this.$refs.wrapper,{
            probeType:this.probetype,
            click:true, //必须设置true，div才能点击
            pullUpLoad:this.pullupload
        })

        //监听滑动
        this.scroll.on('scroll',(position) =>{
            // console.log(position)
            this.$emit('scroll',position)
        })

        //加载更多
        this.scroll.on('pullingUp',() =>{
             this.$emit('pullingup')
            
        })
    }
}
</script>
<style scoped>

</style>
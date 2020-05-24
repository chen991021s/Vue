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
            this.scroll && this.scroll.scrollTo(x,y,time)
        },
         //封装加载更多，可以多次加载更多
        finishPullUp(){
            this.scroll && this.scroll.finishPullUp()
        },
        //封装刷新
        refresh(){
            this.scroll && this.scroll.refresh()
        },
        //封装切换界面离开前滑动的距离
        scrollY(){
            return this.scroll ? this.scroll.y :0
        }
    },
    mounted(){
        //创建BScroll实例
        this.scroll = new BSscroll(this.$refs.wrapper,{
            probeType:this.probetype, //侦测 0，1侦测不到实时位置，2没有侦测惯性位置，3可以侦测滑动的惯性位置
            click:true, //必须设置true，div才能点击
            pullUpLoad:this.pullupload //下拉更多
        })

        //监听滑动
        this.scroll.on('scroll',(position) =>{
            // console.log(position)
            this.$emit('scroll',position)
        })
        //  console.log(this.scroll)
        //加载更多，监听scroll滚动底部
        if(this.pullupload){ //为true才监听
            this.scroll.on('pullingUp',() =>{
                this.$emit('pullingup')
                
            })
        }
    }
}
</script>
<style scoped>
</style>
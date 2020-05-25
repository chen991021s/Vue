<template>
    <div id='detail'>
        <chuldrennavtab class="navtab" @itemclick="itemclick" ref="nav"></chuldrennavtab>
        <!-- <xianswiper :banners="banners"></xianswiper> -->
        <bscroll class="scrolls" ref ="bscroll" 
        :probetype="3" @scroll="scroll">
            <div class="div1" id="div1">商品</div>
            <div class="div2" id="div2">参数</div>
            <div class="div3" id="div3">评论</div>
            <div class="div4" id="div4">推荐</div>
        </bscroll>
        <backtop @click.native="backtop" v-show='isshow'/>
        <navbottom @addtocart="addtocart"/>
    </div>
</template>
<script>
import bscroll from 'components/common/scroll/scroll'
import backtop from 'components/common/backtop/backtop'

import chuldrennavtab from './childrencomp/chuldrennavtab.vue'
import xianswiper from './childrencomp/xianswiper.vue'
import navbottom from './childrencomp/navbottom.vue'

import {GetdetailData} from 'network/home.js'
export default {
    name:'detail',
    data(){
        return{
            id:null,
            banners:[],
            scrollY:[],
            getscrollY:null,
            curindex:0,
            isshow:false
        }
    },
    components:{
        chuldrennavtab,
        xianswiper,
        bscroll,
        backtop,
        navbottom
    },
    created(){
       this.id = this.$route.params.id
        GetdetailData(28)
    },
    mounted(){
        // this.scrollY.push(0)
        // this.scrollY.push(this.$refs.div2.$el.offsetTop)
        // this.scrollY.push(this.$refs.div3.$el.offsetTop)
        // this.scrollY.push(this.$refs.div4.$el.offsetTop)
        //件对应板块距离顶部的距离添加到数组中，在itemcilck中使用获取this.scrollY
        this.scrollY.push(0)
        this.scrollY.push(document.getElementById('div2').offsetTop)
        this.scrollY.push(document.getElementById('div3').offsetTop)
        this.scrollY.push(document.getElementById('div4').offsetTop)

        // console.log(this.scrollY)

    },
    methods:{
        /**
         * 业务操作
         */
        //回到顶部
        backtop(){
            //$refs访问子组件数据  
            //scrollTo(x,y,时间)
            // this.$refs.bscroll.scroll.scrollTo(0,0,500)
            this.$refs.bscroll.scrollto(0,0) //进行封装后
        },
        //滑动距离
        scroll(position){
            //是否显示回到顶部
             this.isshow = -position.y >850

            /**
             * 当positionY在0-200之间，index=0
             * 当positionY在200-400之间，index=1
             * 当positionY在400-800之间，index=2
             * 
             * 当positionY超过800，index=3
             */
            let positionY = -position.y
            let length = this.scrollY.length  //4
            for (let i = 0; i < length; i++) {
                //判断当i<3 并且在数值之间 或者 1=3并且超过最大值 就执行判断
                if((  i<length-1 && positionY>=this.scrollY[i] && positionY<=this.scrollY[i+1])
                ||( i===length-1 && positionY>=this.scrollY[i])){
                    this.curindex = i
                    this.$refs.nav.curindex = this.curindex
                }               
            }
        },
        //点击头部跳转到对应的板块
        itemclick(index){
            // console.log(index)
            this.$refs.bscroll.scrollto(0,-this.scrollY[index],100)
        },
        //添加到购物车
        addtocart(){
            console.log('cat')
            let cats = {}
            cats.title='商品'
            cats.pilce=300,
            cats.count=0
            cats.id = [0,1,2,3]
            cats.check=true
            this.$store.commit('addcart',cats)
        }

        /**
         * 
         * 网络请求
         */
    //      GetdetailData(id){
    //         //函数调用 -> 压入函数栈（保存调用函数中所有变量）
    //         //函数调用结束 -> 弹出栈（释放所有变量）
    //         //当函数调用完之后，里面的变量都会被回收，所有要使用变量存储起来
    //         GetdetailData(id)
    //         .then( res =>{
    //             console.log(res.data.banner.list)
    //             //当函数调用完之后，里面的变量都会被回收，所有要使用变量存储起来
    //             //轮播数据
    //             this.banners = res.data.banner.list
                
    //         })
    //         .catch( err =>{
    //             console.log(err)
    //         })
    //     }
    }
}
</script>
<style scoped>
#detail{
    height: 100vh;
    position: relative;
    z-index: 10000;
    background-color: #ffffff;
}
/* .navtab{
    /* position: fixed;
    background-color: #ffffff;
    width: 100vh; 
} */
.scrolls{
    position: absolute;
    overflow: hidden;
    top:44px;
    left: 0;
    right: 0;
    bottom: 58px;


}
.div1 , .div2 , .div3 , .div4{
    width: 100vh;
    height: 400px;
}
.div1{
    background-color: palevioletred;
}
.div2{
    background-color:fuchsia;
}
.div3{
    background-color:gold;
}
.div4{
    background-color: palegreen;
    height: 600px;
}
</style>
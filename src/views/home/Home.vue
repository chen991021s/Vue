<template>
    <div id="home">
        <navtab class="nav_tab"><div slot="content">购物街</div></navtab>
        <tabcontor :title="title" 
                @tabcontor="tabcontor"
                ref='tabcontor1' class ="tabcontortop" 
                v-show='isfixed'>
        </tabcontor>
        <bscroll class="contenthight" ref ="bscroll" 
        :probetype="3"  @scroll="scroll" 
        :pullupload="true" @pullingup="pullingup">
            <homebanner :banners="banners" @loadimgswiper="loadimgswiper"/>
            <homerecommend :recommends="recommends" />
            <feature />
            <tabcontor :title="title" 
                class="tab-contor" 
                @tabcontor="tabcontor"
                ref='tabcontor'>
            </tabcontor>
            <goodslist :goods="goods.list"></goodslist>
            <!-- <goodslist :goods="showlist"></goodslist> -->
        </bscroll>
        <!-- native 监听组件根元素的原生事件 （组件不能实现点击事件） -->
        <backtop @click.native="backtop" v-show='isshow'></backtop>
    </div> 
</template>
<script>
import homebanner from './childrenhome/homeswiper'
import homerecommend from './childrenhome/homerecommend'
import feature from './childrenhome/feature'

import navtab from 'components/common/navtab/navtab'
import tabcontor from 'components/content/tabContor/tabcontor'
import goodslist from 'components/content/Goods/goodsist'
import bscroll from 'components/common/scroll/scroll' 
import backtop from 'components/common/backtop/backtop'

import {GetHomeMutliData , GetHomeGoods} from 'network/home.js'
import {debounce} from 'common/untils.js'
export default {
    name:'Home',
    components:{
        navtab,
        tabcontor,
        goodslist,
        bscroll,
        backtop,
        homebanner,
        homerecommend,
        feature
    },
    data(){
        return{
            //存储轮播数据
            banners :[],
            //存储轮播下面的小图片
            recommends: [],
            title :['流行','新款','精选'],
            goods:{list:[]},
            // goods:{
            //     'pop':{page:0,list:[]},
            //     'new':{page:0,list:[]},
            //     'sell':{page:0,list:[]}
            //     },
            // curtape:'pop'
            isshow:false,
            tabtop:500,
            isfixed: false,
            savey:0
            
        }
    },
    created(){
        //调用请求轮播数据
       this.GetHomeMutliData()
       
       //调用请求列表数据
        this.GetHomeGoods()
        // this.GetHomeGoods('pop')
        // this.GetHomeGoods('new')
        // this.GetHomeGoods('sell')
    },
    mounted(){
        //1.监听goodsitem图片加载完成,刷新
        //刷新 监听goodsitem图片加载完成 ，当图片加载完成就会调用load的方法
        //this.$bus.$emit('itemloadimg')导出的itemloadimg
        //本身是没有$bus, Vue.prototype.$bus = new Vue() ,在vue原型上添加$bus,指向vue实例
        //$bus事件总线 在非父子之间的通信可以使用事件总线
        //从goodsitem传入到Home中
        //debounce在common/untils.js中封装的方法
        const refresh =debounce(this.$refs.bscroll.refresh,500)
        this.$bus.$on('itemloadimg', () =>{
            refresh() //防抖函数，在规定时间内执行对应的次数
            // this.$refs.bscroll.refresh()//刷新 
        })
    },
    //活跃状态（将离开时滑动的高度赋给进入时）
    activated(){
        this.$refs.bscroll.scrollto(0,this.savey,0)
        this.$refs.bscroll.refresh()
    },
    //不活跃状态 （记录离开时滑动的高度）
    deactivated(){
        this.savey = this.$refs.bscroll.scrollY()
    },
    computed:{
        //根据点击的index（流行，最新，精选）改变类型，从而改变数据
        // showlist(){
        // return goods[curtape].list
        // }
    },
    methods:{
        /**
         * 业务事件
         */
        //点击切换按钮，请求不同的type数据
        tabcontor(index){
            // switch (index) {
            //     case 0:
            //         this.curtape = 'pop'
            //         break;
            //     case 1:
            //         this.curtape = 'new'
            //         break;
            //     case 2:
            //         this.curtape = 'sell'
            //         break;
            // }

            //this.$refs.tabcontor1可以取到子组件的数据
            //使两个tabcontor组件点击的index相等
            this.$refs.tabcontor1.curusindex =index
            this.$refs.tabcontor.curusindex =index
        },
        //回到顶部
        backtop(){
            //$refs访问子组件数据  
            //scrollTo(x,y,时间)
            // this.$refs.bscroll.scroll.scrollTo(0,0,500)
            this.$refs.bscroll.scrollto(0,0) //进行封装后
        },
        //一键回顶是否显示 ,是否固定在顶部（判断当前滑动的高度）
        scroll(position){
            this.isshow = -position.y >1000
            // console.log(position.y)
            this.isfixed = (-position.y) > this.tabtop+44
            // console.log(this.isfixed)
        },
        //当划到最后底部时，加载更多
        pullingup(){
            GetHomeGoods() //请求数据
            console.log('加载更多')
            this.$refs.bscroll.finishPullUp() //多次加载
              
            //一到底部就调用GetHomeGoods方法，发送网络请求
            // 当前的类型等于data中的数据，data数据类型根据
            // this.GetHomeGoods(this.curtape)
        },
        //监听轮播图片加载完成，获取tabcontor到顶部的高度
        loadimgswiper(){
            //2.获取tabcontor的offsetTop
            // console.log(this.$refs.tabcontor.$el.offsetTop)
            this.tabtop = this.$refs.tabcontor.$el.offsetTop
            
        },
        
        /**
         * 网络请求事件
         */
        //请求轮播数据
        GetHomeMutliData(){
            //函数调用 -> 压入函数栈（保存调用函数中所有变量）
            //函数调用结束 -> 弹出栈（释放所有变量）
            //当函数调用完之后，里面的变量都会被回收，所有要使用变量存储起来
            GetHomeMutliData()
            .then( res =>{
                // console.log(res.data.banner.list)
                //当函数调用完之后，里面的变量都会被回收，所有要使用变量存储起来
                //轮播数据
                this.banners = res.data.banner.list
                this.recommends = res.data.recommend.list
                
            })
            .catch( err =>{
                console.log(err)
            })
        },
        //请求列表数据(由于没有接口，接口只有一个类型，不能切换图片)
        GetHomeGoods(){
            GetHomeGoods()
            .then( res =>{
                // console.log(res.data.result)
                //将请求的数据添加到goods数据中
                this.goods.list.push(...res.data.result.itemList) 
            })
        }
        // GetHomeGoods(type){
        //     const page = this.goods[type].page + 1
        //     GetHomeGoods(type,page)
        //     .then( res =>{
        //         console.log(res.data.result)
        //         this.goods[type].list.push(...res.data.result.itemList) //将请求的数据添加到goods数据中
        //         this.goods[type].page +=1 //页码+1
        //     })
        // }
    }
}
</script>
<style scoped>
#home{
    position: relative;
    height: 100vh; /**视口高度 */
}
 .nav_tab{
    background-color: var(--color-tint);
    color: white;
    /* 使用Bscroll局部滚动,对购物街没有影响*/
    /* position: fixed;
    z-index: 999;
    left: 0;
    right: 0;
    top: 0; */
 }
 /* .tab-contor{
     position: sticky; /*适用于移动端*//*
     top: 44px;
     background-color: #ffffff;
     z-index: 999;
 } */
 .tabcontortop{
     width: 100vw;
     background-color: #ffffff;
     z-index: 999;
     position:fixed;
 }
 .contenthight{
     overflow:hidden;
     position: absolute;
     top:44px;
     bottom: 49px;
     left: 0;
     right: 0;
 }
 /* .contenthight{
     margin-top: 44px;
     height: calc(100% - 93px); /**计算高度*/
     /* overflow: hidden;
 } */
</style>
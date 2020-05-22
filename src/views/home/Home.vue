<template>
    <div id="home">
        <navtab class="nav_tab"><div slot="content">购物街</div></navtab>
        <homebanner :banners="banners"/>
        <homerecommend :recommends="recommends" />
        <feature />
        <deature :title="title" class="tab-contor" @tabcontor="tabcontor"></deature>
        <goodslist :goods="goods.list"></goodslist>
         <!-- <goodslist :goods="showlist"></goodslist> -->
    </div> 
</template>
<script>
import navtab from 'components/common/navtab/navtab'
import deature from 'components/content/tabContor/tabcontor'
import goodslist from 'components/content/Goods/goodsist'

import homebanner from './childrenhome/homeswiper'
import homerecommend from './childrenhome/homerecommend'
import feature from './childrenhome/feature'

import {GetHomeMutliData , GetHomeGoods} from 'network/home.js'
export default {
    name:'Home',
    components:{
        navtab,
        deature,
        goodslist,
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
    computed:{
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
        //         // this.goods[type].page +=1 //页码+1
        //     })
        // }
    }
}
</script>
<style scoped>
 .nav_tab{
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    z-index: 999;
    left: 0;
    right: 0;
    top: 0;
 }
 .tab-contor{
     position: sticky; /**适用于移动端 */
     top: 44px;
     background-color: #ffffff;
     z-index: 999;
 }
</style>
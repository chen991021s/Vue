<template>
    <div id="home">
        <navtab class="nav_tab"><div slot="content">购物街</div></navtab>
        <homebanner :banners="banners"/>
        <homerecommend :recommends="recommends" />
        <feature />
        <deature :title="['流行','新款','精选']"></deature>
    </div> 
</template>
<script>
import navtab from 'components/common/navtab/navtab'
import deature from 'components/content/tabContor/tabcontor'

import homebanner from './childrenhome/homeswiper'
import homerecommend from './childrenhome/homerecommend'
import feature from './childrenhome/feature'

import {GetHomeMutliData} from 'network/home.js'
export default {
    name:'Home',
    components:{
        navtab,
        deature,
        homebanner,
        homerecommend,
        feature
    },
    data(){
        return{
            //存储轮播数据
            banners :[],
            //存储轮播下面的小图片
            recommends: []
        }
    },
    created(){
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
</style>
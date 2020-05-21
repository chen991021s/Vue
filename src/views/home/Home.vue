<template>
    <div id="home">
        <navtab class="nav_tab">
            <div slot="content">购物街</div>
        </navtab>
        <swiper :banners="banners"></swiper>
    </div> 
</template>
<script>
import navtab from 'components/common/navtab/navtab'
import  swiper from './childrenhome/swiper'
import {GetHomeMutliData} from 'network/home.js'
export default {
    name:'Home',
    components:{
        navtab,
        swiper
    },
    data(){
        return{
            //存储轮播数据
            banners :[],
            recommends: [],
        }
    },
    created(){
        //函数调用 -> 压入函数栈（保存调用函数中所有变量）
        //函数调用结束 -> 弹出栈（释放所有变量）
        //当函数调用完之后，里面的变量都会被回收，所有要使用变量存储起来
        GetHomeMutliData()
        .then( res =>{
            // console.log(res)
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
 }
</style>
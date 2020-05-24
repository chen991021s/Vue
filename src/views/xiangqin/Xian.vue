<template>
    <div>
        <chuldrennavtab></chuldrennavtab>
        <xianswiper :banners="banners"></xianswiper>
    </div>
</template>
<script>
import chuldrennavtab from './childrencomp/chuldrennavtab.vue'
import xianswiper from './childrencomp/xianswiper.vue'
import {GetHomeMutliData} from 'network/home.js'
export default {
    name:'xian',
    data(){
        return{
            id:null,
            banners:[]
        }
    },
    components:{
        chuldrennavtab,
        xianswiper
    },
    created(){
       this.id = this.$route.params.id
    },
    methods:{

         GetHomeMutliData(){
            //函数调用 -> 压入函数栈（保存调用函数中所有变量）
            //函数调用结束 -> 弹出栈（释放所有变量）
            //当函数调用完之后，里面的变量都会被回收，所有要使用变量存储起来
            GetHomeMutliData()
            .then( res =>{
                console.log(res.data.banner.list)
                //当函数调用完之后，里面的变量都会被回收，所有要使用变量存储起来
                //轮播数据
                this.banners = res.data.banner.list
                
            })
            .catch( err =>{
                console.log(err)
            })
        }
    }
}
</script>
<style scoped>

</style>
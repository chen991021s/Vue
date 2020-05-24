<template>
<!-- 轮播 -->
    <div class="homeswiper">
        <swiper>
        <swiper-item v-for='(item,index) in banners' :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="" @load='loadimg'>
            </a>
        </swiper-item>
        </swiper>
    </div>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper"
export default {
    name:"homeswiper",
    props:{
        banners: {
        type: Array,
        default(){
            return[]
        }
      }
    },
    components:{
        Swiper,
        SwiperItem
    },
    data(){
        return{
            load:true
        }
    },
    methods:{
        loadimg(){
            //只发送一次 (不使用防抖函数：因为这个只发送一次后面的就不会在监听和发送了，
            //而防抖就是在规定的时间内，看是否还调用，时间一到最后整合一起发送)
            if(this.load){
                this.$emit('loadimgswiper')
                this.load = false
            }           
        }
    }

}
</script>
<style scoped>
.homeswiper{
    margin-top: 1px;
    margin-top: 44px;
}
</style>
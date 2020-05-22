<template>
<!-- 轮播 -->
    <div class="homeswiper">
        <swiper>
        <swiper-item v-for='(item,index) in banners' :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="">
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
    }

}
</script>
<style scoped>
.homeswiper{
    margin-top: 1px;
    margin-top: 44px;
}
</style>
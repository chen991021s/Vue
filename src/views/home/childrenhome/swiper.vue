<template>
    <swiper>
        <swiper-Item v-for='item in banners' :key="item.title">
            <a :href="item.link">
                <img :src="item.image" alt="">
            </a>
        </Swiper-item>
    </swiper>
</template>
<script>
import { Swiper, SwiperItem} from 'components/common/sqiper'
export default {
    name:'swiper',
    props:{
        banners:{
            type:Array,
            default(){
                return []
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

</style>
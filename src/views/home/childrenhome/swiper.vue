<template>
    <Swiper>
        <SwiperItem v-for='item in banners' :key="item.title">
            <a :href="item.link">
                <img :src="item.image" alt="">
            </a>
        </SwiperItem>
    </Swiper>
</template>
<script>
import { Swiper, SwiperItem} from 'components/common/sqiper'
export default {
    name:'swiper',
    props:{
        banners:{
            type:Array,
            default(){}
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
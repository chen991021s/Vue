<template>
<!-- 流行，精选，新款 整体组件 -->
    <div class="goods" >
        <goodsitem v-for="(item,index) in goods" :key='index' :goodsitem="item"/>
    </div>
</template>
<script>
import goodsitem from './goodsitem'
export default {
    name:'goodslist',
    props:{
        goods:{
            type:Array,
            default(){
                return[]
            }
        }
    },
    components:{
        goodsitem
    }

}
</script>
<style scoped>
 .goods {
    display: flex;
    flex-wrap: wrap; /*换行 */
    justify-content: space-around; /*中间距离是两边的一倍*/
    padding: 2px;
  }
</style>
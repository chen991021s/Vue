<template>
 <!-- 流行，精选，新款 整体小组件 -->
    <div class="goods-item">
        <img :src="goodsitem.data.icon" alt="">
        <div class="goods-info ">
             <p>{{goodsitem.data.description}}</p>
             <span class="collect">{{goodsitem.data.id}}</span>
        </div>   
    </div>
</template>
<script>
export default {
    name:'goodsitem',
    props:{
        goodsitem:{
            type:Object,
            default(){
                return{}
            }
        }
    }
}
</script>
<style scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before { /**在id前面加图片 */
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
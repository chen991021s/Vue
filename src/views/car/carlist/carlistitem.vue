<template>
    <div id='carlistitem'>
        <bscroll class="contenthight" ref ="bscroll" 
        :probetype="3">
        <div v-for="(item,index) in this.$store.state.catlist" :key="index" class="list">
            <div class="check">
                <checkbuttom :ischeck="item.check" @click.native="checks(item)"/>
            </div>
            <div class="imgdiv">
                <img src="~assets/img/home/recommend_bg.jpg" alt="">
            </div>
            <div class="spandiv">
                <p>{{item.title}}</p>
                <span>￥{{item.pilce}}</span>
                <span class="span2">X{{item.count}}</span>
            </div>
        </div>
        </bscroll>       
    </div>
</template>
<script>
import bscroll from 'components/common/scroll/scroll' 
import checkbuttom from 'components/content/checkbuttom/checkbuttom'
export default {
    name:'carlist',
    data(){
        return{
            ischeck:true
        }
    },
    components:{
        bscroll,
        checkbuttom
    },
    methods:{
        checks(item){
            item.check = !item.check
        }
    }
    
}
</script>
<style scoped>
#carlistitem{
    width: 100vh;
}
.list{
    border-bottom:2px solid #f2f2f2 ;
     display: flex;
}
.check{
    padding-top: 30px;
    margin-right: 8px;
}
.imgdiv img{
    width: 80px;
    height: 80px;
}
.spandiv{
    height: 80px;
    margin-left: 20px;
    padding-top: 15px;
}
.spandiv p{
    font-size: 23px;
}
.spandiv span{
    display: inline-block;
    margin-top: 7px;
}
.spandiv>.span2{
    display: inline-block;
    width: 120px;
    text-align: right;
}
 .contenthight{
    overflow:hidden;
    position: absolute;
    top:44px;
    bottom: 80px;
    left: 0;
    right: 0;
  }
</style>
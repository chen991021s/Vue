<template>
    <div id="catbottomlist">
        <div class="bottom-content">
        <checkbuttom :ischeck="this.$store.state.catlist.check" class="check-bottom"/>
        <span>全选</span>
        </div>
        <div class="plice">
            合计：{{toplice}}
        </div>
        <div class="right">
            去计算:{{this.$store.state.catlist.length}}
        </div>
    </div>
</template>
<script>
import checkbuttom from 'components/content/checkbuttom/checkbuttom'
export default {
    name:'catbottomlist',
    components:{
       checkbuttom
    },
    computed:{
        toplice(){
            return '￥' + this.$store.state.catlist.filter(item =>{
                return item.check
            }).reduce((rest,n)=>{
                return rest+ n.pilce* n.count
            },0).toFixed(2)
            
        }
    }
    
}
</script>
<style scoped>
#catbottomlist{
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 50px;
    z-index:1000;
    height: 55px;
    line-height: 50px;
    padding-left: 10px;
    background-color: white;
}
.bottom-content{
    display: flex;
    align-items: center;
}
.check-bottom{
    padding-top: 10px;
    padding-right: 5px;
    
}
.plice{
    padding-left: 10px;
    flex: 2;
}
.right{
    flex: 1;
    color: white;
    text-align: center;
    height: 50px;
    background-color: var(--color-tint);
}
</style>
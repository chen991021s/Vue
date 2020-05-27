<template>
    <div id="catbottomlist">
        <div class="bottom-content">
        <checkbuttom :ischeck="checks" class="check-bottom" @click.native="clickcheck"/>
        <span>全选</span>
        </div>
        <div class="plice">
            合计：{{toplice}}
        </div>
        <div class="right" @click='sumclick'>
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
        //计算商品总价格
        toplice(){
            return '￥' + this.$store.state.catlist.filter(item =>{
                return item.check
            }).reduce((rest,n)=>{
                return rest+ n.pilce* n.count
            },0).toFixed(2) 
        },
        
        //全选
        checks(){
            //在数组中过滤出check=false 数组的长度，长度取反,为0就是true(全选按钮显示选中),否则就是false
            return !(this.$store.state.catlist.filter(item => !item.check).length)
        }
    },
    methods:{
        clickcheck(){
            if(this.checks){
                //遍历循环catlist，改变check的值
                this.$store.state.catlist.forEach(item => {
                    item.check = false
                })
            }else{
                this.$store.state.catlist.forEach(item => {
                    item.check = true
                })
            }
        },
        //结算提醒
        sumclick(){
            if(this.$store.state.catlist.length>0 && this.checks){
                this.$toast.shows('购买成功')
            }else{
                this.$toast.shows('请选择商品再购买')
            }
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
<template>
    <div>
        <navtab class="nav_tab">
            <div slot="left" class="left" @click="imgclick">
                <img src="~assets/img/common/back.svg" alt="">
            </div>
            <div slot="content" class="title">
                <div v-for='(item,index) in title' :key="index"
                 class="itemtitle" 
                 :class="{active:index === curindex}"
                 @click='itemclick(index)'> 
                    {{item}}
                 </div>              
            </div>
        </navtab>
    </div>
</template>
<script>
import navtab from 'components/common/navtab/navtab'
export default {
    name:'childrennavtab',
    data(){
        return{
            title:['商品','参数','评论','推荐'],
            curindex:0
        }
    },
    components:{
        navtab
    },
    methods:{
        itemclick(index){
            this.curindex = index
            this.$emit('itemclick',index)
        },
        imgclick(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
.title{
    display: flex;
}
.itemtitle{
    flex: 1;
    font-size: 13px;
}
.active{
    color: var(--color-tint);
}
.left img{
    margin-top: 10px;
}
</style>

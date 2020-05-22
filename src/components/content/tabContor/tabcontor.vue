<template>
    <div class="tabcontor">
        <div v-for="(item,index) in title" :key='index' 
        class="tabcontor-item" :class="{active:index ===curusindex}" @click="tabcontor(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'tabcontor',
    props:{
        title:Array
    },
    data(){
        return{
            curusindex:0
        }
    },
    methods:{
        tabcontor(index){
            this.curusindex = index
            this.$emit('tabcontor',index)
        }
    }
}
</script>
<style scoped>
.tabcontor{
    display: flex;
    text-align: center;
    font-size: 14px;
}
.tabcontor-item{
    flex: 1;
    height: 40px;
    line-height: 40px;
}
.tabcontor-item span{
    padding: 7px;
}
.active{
 color: var(--color-high-text);
}
.active span{
    border-bottom:2px solid var(--color-high-text);
}
</style>
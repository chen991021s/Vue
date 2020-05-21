<template>
    <div>
        <div v-for="(item,index) in title" :key='index'>
            <span>{{item}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'tabcontor',
    props:{
        title:String
    }
}
</script>
<style scoped>

</style>
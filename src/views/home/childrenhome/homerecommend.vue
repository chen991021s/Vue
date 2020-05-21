<template>
    <div class="recommends">
        <div v-for='item in recommends' :key="item.title" class="recommends-item">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name:'homerecommend',
    props:{
        recommends:Array
    }
}
</script>
<style scoped>
.recommends{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 13px;
    margin-top: 4px;
    padding-bottom: 20px;
    box-shadow: 0px 5px 5px rgba(150,150,150,.08);
}
.recommends-item{
    flex: 1;
}
.recommends-item img{
    width: 70px;
    height: 70px;
    padding-bottom: 5px;

}

</style>
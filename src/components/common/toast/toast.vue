<template>
    <div class="toast" v-show="isshow">
        <div>{{msgess}}</div>
    </div>
</template>
<script>
export default {
    name:'toast',
    props:{
        // msgess:{
        //     type:String,
        //     default:''
        // },
        // show:{
        //     type:Boolean,
        //     default:false
        // }
    },
    data(){
        return{
            msgess:'',
            isshow:false
        }
    },
    methods:{
        shows(title,date=2000){
            // console.log(title,date)
            this.isshow=true
            this.msgess = title
            setTimeout(() => {
                this.isshow=false
                this.msgess = ''
            }, date);
        }
    }
}
</script>
<style scoped>
.toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 10px 10px;
    border-radius:5% ;
    line-height: 40px;
    color: white;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 99999;
}
</style>
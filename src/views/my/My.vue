<template>
    <div id="profile">
        <navtab class="nav-bar">
            <div slot="content">我的档案</div>
        </navtab>
        <userinfo/>
        <accountinfo/>
        <normallistview :list-data="orderList"/>
        <normallistview :list-data="serviceList"/>
    </div>
</template>
<script>
import navtab from 'components/common/navtab/navtab'

import accountinfo from './childComps/AccountInfo.vue'
import normallistview from './childComps/NormalListView.vue'
import userinfo from './childComps/UserInfo.vue'

export default {
    name:'My',
    components:{
        navtab,
        userinfo,
        accountinfo,
        normallistview,
        
    },
    data() {
    	return {
		    orderList: [
			    {icon: 'message.svg', info: '我的消息'},
			    {icon: 'pointer.svg', info: '积分商城'},
			    {icon: 'vip.svg', info: '会员卡'}
		    ],
		    serviceList: [
			    {icon: 'cart.svg', info: '我的购物车'},
			    {icon: 'shopping.svg', info: '下载购物APP'}
		    ]
        }
    }
}
</script>
<style scoped>
#profile {
    background-color: #f2f2f2;

  }
  
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    margin-bottom: 1px;
  }
</style>
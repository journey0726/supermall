<template>
  <div id = 'detail'>
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :topImage='topImage'></detail-swiper>
    <detail-base-info :goods='goods'></detail-base-info>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import {getDetail,Goods} from '@/network/detail.js'



export default {
    name:'Detail',
    components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo
      
               
    },
    data(){
        return {
            iid:null,
            topImage:[],
            goods:{}
        }
    },
    created(){
        this.iid = this.$route.params.iid,
        getDetail(this.iid).then(res=>{
            console.log(res);
            this.topImage = res.result.itemInfo.topImages
            const data = res.result
            this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        })
    }
}
</script>

<style>

</style>
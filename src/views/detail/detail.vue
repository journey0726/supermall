<template>
  <div id = 'detail'>
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll class="content" :pullUpLoad='true' ref="scroll">
        <detail-swiper :topImage='topImage'></detail-swiper>
        <detail-base-info :goods='goods'></detail-base-info>
        <detail-shop-info :shop='shop'></detail-shop-info>
        <detail-goods-info :detailInfo='dataInfo' @loadImgEvent='loadImgEvent'></detail-goods-info>
        <detail-params :paramInfo='paramInfo'></detail-params>
        <detail-comment :comment="comment"></detail-comment>
    </scroll>
   
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParams from './childComps/DetailParams'
import DetailComment from './childComps/DetailComment'

import Scroll from '@/components/commom/scroll/Scroll.vue'

import {getDetail,Goods,Shop,GoodsParam} from '@/network/detail.js'







export default {
    name:'Detail',
    components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo ,
        DetailShopInfo ,
        Scroll,
        DetailGoodsInfo,
        DetailParams,
        DetailComment
        
        
       
             
    },
    data(){
        return {
            iid:null,
            topImage:[],
            goods:{},
            shop:{},
            dataInfo:{},
            paramInfo:{},
            comment:{}
        }
    },
    created(){
        this.iid = this.$route.params.iid,
        getDetail(this.iid).then(res=>{
            console.log(res);
            this.topImage = res.result.itemInfo.topImages
            const data = res.result
            this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
            this.shop = new Shop(data.shopInfo)
            this.dataInfo = data.detailInfo
            this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
            this.comment = data.rate.list[0]
        })
    },
    methods:{
        loadImgEvent(){
            this.$refs.scroll.refresh()
        }
    }
}
</script>

<style scoped>
    #detail{
        position: relative;
        z-index: 9;
        background-color: #fff;
        height: 100vh;
    }
    .detail-nav{
        position: relative;
        z-index: 9;
        background-color: #fff;
    }
    .content{
        height: calc(100% - 44px);
    }
</style>
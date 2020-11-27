<template>
<div id="home">
  <NavBar id='home-nav'> <div slot="center">购物街</div></NavBar> 
    <home-swiper :banners='banners'></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control class="tab-control" :titles="['流行','新款','精选']"></tab-control>
    <goods-list :goods='goods["pop"].list'></goods-list>
    <ul>
      <li>f</li>
      <li>f</li>
      <li>f</li>
      <li>f</li>
      <li>f</li>
      <li>f</li>
      <li>f</li>
      <li>f</li>
           <li>f</li>
      <li>f</li>
      <li>f</li>
      <li>f</li>
      <li>f</li>
      <li>f</li>
      <li>f</li>
      <li>f</li>
           <li>f</li>
      <li>f</li>
      <li>f</li>
      <li>f</li>
      <li>f</li>
      <li>f</li>
      <li>f</li>
      <li>f</li>
           <li>f</li>
      <li>f</li>
      <li>f</li>
      <li>f</li>
      <li>f</li>
      <li>f</li>
      <li>f</li>
      <li>f</li>
      
      
    </ul>
</div>
</template>

<script>
import NavBar from '@/components/commom/navbar/NavBar.vue'
import TabControl from '@/components/content/tabControl/TabControl.vue'
import GoodsList from '@/components/content/goods/goodsList.vue'

import HomeSwiper from "@/views/home/childComps/HomeSwiper.vue"
import RecommendView from '@/views/home/childComps/commendView.vue'
import FeatureView from '@/views/home/childComps/FeatureView.vue'

import{getHomeMultiData,getGoodsData} from '@/network/home.js'




export default {
  name:'home',
  components:{
    NavBar,
   HomeSwiper,
   RecommendView,
   FeatureView,
    FeatureView,
    TabControl,
    GoodsList
    
    
  },
  data(){
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      }
    }
  },
  created(){
    this.getHomeMultiData()
    this.getGoodsData('pop')
    this.getGoodsData('new')
    this.getGoodsData('sell')
  },
  methods:{
    getHomeMultiData(){
      getHomeMultiData().then(res=>{
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
    },
    getGoodsData(type){
      const page = this.goods[type].page+1
      getGoodsData(type,page).then(res=>{
      this.goods[type].list.push(...res.data.list)
      this.goods[type].page+=1
      
    })
    }
  }
}
</script>

<style>
#home-nav{
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
#home {
  padding-top: 44px;
}
.tab-control {
  position: sticky;
  top: 44px;
  background-color: #fff;
  z-index: 9;
}

</style>
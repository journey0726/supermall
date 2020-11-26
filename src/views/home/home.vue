<template>
<div id="home">
  <NavBar id='home-nav'> <div slot="center">购物街</div></NavBar> 
    <home-swiper :banners='banners'></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
</div>
</template>

<script>
import NavBar from '@/components/commom/navbar/NavBar.vue'
import HomeSwiper from "@/views/home/childComps/HomeSwiper.vue"
import RecommendView from '@/views/home/childComps/commendView.vue'
import FeatureView from '@/views/home/childComps/FeatureView.vue'

import{getHomeMultiData} from '@/network/home.js'


export default {
  name:'home',
  components:{
    NavBar,
   HomeSwiper,
   RecommendView,
   FeatureView,
    FeatureView
  },
  data(){
    return {
      banners:[],
      recommends:[]
    }
  },
  created(){
    getHomeMultiData().then(res=>{
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
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

</style>
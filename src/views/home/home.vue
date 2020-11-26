<template>
<div id="home">
  <NavBar id='home-nav'> <div slot="center">购物街</div></NavBar> 
    <home-swiper :banners='banners'></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
</div>
</template>

<script>
import NavBar from '@/components/commom/navbar/NavBar.vue'
import HomeSwiper from "@/views/home/childComps/HomeSwiper.vue"
import RecommendView from '@/views/home/childComps/commendView.vue'
import{getHomeMultiData} from '@/network/home.js'

export default {
  name:'home',
  components:{
    NavBar,
   HomeSwiper,
   RecommendView
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
}

</style>
<template>
  <div id="home">
    <NavBar id="home-nav"> <div slot="center">购物街</div></NavBar>
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl1"
        class="tabControl"
        v-show="isFixed"
      ></tab-control>
    <scroll class="content" ref="scroll" :probe-type='3' @scroll = 'contentScroll' :pull-up-load='true' @pullingUp='loadMore'>
      <home-swiper :banners="banners" @swiperImgLoad='swiperImgLoad'></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      ></tab-control>
      <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>
    <back-top @click.native="backTop" v-show="isShow"></back-top>
  </div>
</template>

<script>
import NavBar from "@/components/commom/navbar/NavBar.vue";
import TabControl from "@/components/content/tabControl/TabControl.vue";
import GoodsList from "@/components/content/goods/goodsList.vue";
import Scroll from "@/components/commom/scroll/Scroll.vue";

import HomeSwiper from "@/views/home/childComps/HomeSwiper.vue";
import RecommendView from "@/views/home/childComps/commendView.vue";
import FeatureView from "@/views/home/childComps/FeatureView.vue";
import BackTop from "@/components/content/backTop/backTop.vue";

import { getHomeMultiData, getGoodsData } from "@/network/home.js";
import {debounce} from '@/common/utils.js'

export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShow:false,
      tabOffsetTop:0,
      isFixed:false,
      saveY:0
    };
  },
 
  created() {
    this.getHomeMultiData();
    this.getGoodsData("pop");
    this.getGoodsData("new");
    this.getGoodsData("sell");
    
  },
  mounted(){
    const refresh = debounce(this.$refs.scroll.refresh,50)
    this.$bus.$on('itemImageLoad',()=>{
      refresh()
    })
    
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  activated(){
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
  },
  deactivated(){
    this.saveY = this.$refs.scroll.getScrollY()
  },
  methods: {
    swiperImgLoad(){
  this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    contentScroll(position){
      this.isShow = (-position.y)>1000
      this.isFixed = (-position.y)>this.tabOffsetTop
      
      
    },
    loadMore(){
      this.getGoodsData(this.currentType)
      
    },
    backTop(){
      this.$refs.scroll.scrollTo(0,0)
    },
    getHomeMultiData() {
      getHomeMultiData().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getGoodsData(type) {
      const page = this.goods[type].page + 1;
      getGoodsData(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPulling()
      });
    },
  },
};
</script>

<style scoped>
#home-nav {
  background-color: var(--color-tint);
  color: #fff;
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
  
}

/* .content{
  height:calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;
} */
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tabControl{
  position: relative;
  z-index:9;
  background-color: #fff;
}

</style>
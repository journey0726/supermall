<template>
  <div id="detail">
    <detail-nav-bar
      class="detail-nav"
      @titleClick="titleClick"
      ref="nav"
    ></detail-nav-bar>

    <scroll
      class="content"
      :pullUpLoad="true"
      ref="scroll"
      @scroll="contentScroll"
    >
      <detail-swiper :topImage="topImage"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detailInfo="dataInfo"
        @loadImgEvent="loadImgEvent"
      ></detail-goods-info>
      <detail-params :paramInfo="paramInfo" ref="params"></detail-params>
      <detail-comment :comment="comment" ref="comment"></detail-comment>
      <good-list
        :goods="recommend"
        ref="goodlist"
        class="recommend"
      ></good-list>
    </scroll>
    <back-top @click.native="backTop" v-show="isShow"></back-top>
    <detail-bottom-bar @addEvent="addToCart"></detail-bottom-bar>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParams from "./childComps/DetailParams";
import DetailComment from "./childComps/DetailComment";
import GoodList from "@/components/content/goods/goodsList.vue";
import BackTop from "@/components/content/backTop/backTop.vue";
import DetailBottomBar from "./childComps/DetailBottomBar";

import Scroll from "@/components/commom/scroll/Scroll.vue";
import { debounce } from "@/common/utils.js";
import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "@/network/detail.js";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParams,
    DetailComment,
    GoodList,
    Scroll,
    BackTop,
    DetailBottomBar,
  },
  data() {
    return {
      iid: null,
      topImage: [],
      goods: {},
      shop: {},
      dataInfo: {},
      paramInfo: {},
      comment: {},
      recommend: [],
      themeTopYs: [],
      getTopYs: null,
      currentIndex: 0,
      isShow: false,
    };
  },
  created() {
    (this.iid = this.$route.params.iid),
      getDetail(this.iid).then((res) => {
        this.topImage = res.result.itemInfo.topImages;
        const data = res.result;
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        this.shop = new Shop(data.shopInfo);
        this.dataInfo = data.detailInfo;
        this.paramInfo = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        );
        this.comment = data.rate.list[0];
        this.getTopYs = debounce(() => {
          this.themeTopYs = [];
          this.themeTopYs.push(0);
          this.themeTopYs.push(this.$refs.params.$el.offsetTop - 44);
          this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 44);
          this.themeTopYs.push(this.$refs.goodlist.$el.offsetTop - 44);
        }, 300);
        // this.$nextTick(()=>{
        //     this.themeTopYs=[],
        //     this.themeTopYs.push(0)
        //     this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        //     this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        //     this.themeTopYs.push(this.$refs.goodlist.$el.offsetTop)
        //     console.log(this.themeTopYs);
        // })
      }),
      getRecommend().then((res) => {
        this.recommend = res.data.list;
      });
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.$bus.$on("itemImageLoad", () => {
      refresh();
    });
  },
  methods: {
    loadImgEvent() {
      this.$refs.scroll.refresh();
      this.getTopYs();
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      this.isShow = -position.y > 1000;
      //console.log(position);
      const positionY = -position.y;
      //console.log(positionY);
      let length = this.themeTopYs.length;
      for (let i = 0; i < length; i++) {
        if (
          this.currentIndex !== i &&
          ((i < length - 1 &&
            positionY >= this.themeTopYs[i] &&
            positionY < this.themeTopYs[i + 1]) ||
            (i === length - 1 && positionY >= this.themeTopYs[i]))
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 500);
    },
    addToCart() {
      const product = {};
      product.image = this.topImage[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      // this.$store.commit('addCart',product)
      this.$store.dispatch("addCart", product).then(res=>{
        this.$toast.show(res)
        console.log(this.$toast);
      });
    },
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px);
}
.recommend {
  padding-bottom: 30px;
}
</style>
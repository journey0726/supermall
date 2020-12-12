<template>
  <div class="right">
    <Scroll class="content" :pullUpLoad="true" :probe-type='3' ref="scroll">
     <div v-for="(item,index) in goodsList" class="goods">
       <a :href="item.link">
         <img :src="item.image" @load="imgLoad" class="img">
       </a>
     </div>
    </Scroll>
  </div>
</template>

<script>
import Scroll from '@/components/commom/scroll/Scroll.vue'
export default {
    name:'categoryRight',
    components:{
      Scroll
    },
    props:{
      goodsList:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      imgLoad() {
      this.count++;
      if (this.count >= this.goodsList.length) {
        this.$refs.scroll.refresh();
        this.count = 0;
      }
    }
}}
</script>

<style scoped>
  .right{
    flex: 1;
    height: 100%;
    position: relative;
  }
    .content {
  height: calc(100% - 44px);
  overflow: hidden;
}
.goods{
  border-bottom: 1px solid rgb(8, 184, 207);
  width: 200px;
 
}
.img{
  width: 70%;
}
</style>
<template>
   <div>
        <scroll class="content" :pullUpLoad="true">
           <goods-item v-for="(item, index) in cartList" :product = "item" :key="index"></goods-item>
        </scroll>
    </div> 
    
</template>

<script>
import goodsItem from './goodsItem.vue'
import { mapGetters } from 'vuex'
import Scroll from '@/components/commom/scroll/Scroll.vue'

export default {
    name:"cartGoods",
    components:{
        Scroll,
        goodsItem
     

    },

    computed:{
        ...mapGetters(['cartList'])
    }
}
</script>

<style scoped>
    .content{
        height: calc(100vh - 44px - 49px);
        overflow: hidden;
    }
</style>
<template>
  <div class="detailSwiper">
     <swiper>
         <swiper-item class="swiperItem" v-for="item in topImage">
             <img :src="item" alt="">
         </swiper-item>
     </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from '@/components/commom/swiper/index.js'

export default {
    name:'DetailSwiper',
    components:{
        Swiper,
        SwiperItem
      
    },
    props:{
        topImage:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
    .swiperItem{
        height: 300px;
        overflow: hidden;
    }
</style>
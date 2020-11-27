<template>
  <div class="goods">
      <goods-list-item v-for="item in goods" :goods-item='item'></goods-list-item>
  </div>
</template>

<script>
import goodsListItem from './goodsListItem.vue'
export default {
name:'goodsList',
components:{
    goodsListItem
},
props:{
    goods:{
        type:Array,
        default(){
            return[]
        }
    }
}
}
</script>

<style>
    .goods{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

</style>
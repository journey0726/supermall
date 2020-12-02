<template>
  <div class="goods">
    
  </div>
</template>

<script>
export default {
    name:goodsItem,
    props:{
        product:{
            type:Object,
            default:{}
        }
    },
   
}
</script>

<style scoped>
.goods{
    width: 100%;
    height: 90px;
    border: 1px solid ;
}
      .img{
    width: 60px;
    height: 80px;
    border-radius: 5px;
  }
</style>
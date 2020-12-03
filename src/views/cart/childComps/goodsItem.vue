<template>
  <div class="goods">
    <div class = 'check'>
      <input type="checkbox">
    </div>
    
      <img :src="product.image" alt="" class="img">
   
    <div class="title">
      <span>{{product.title.slice(0,10) + '...'}}</span>
    </div>
    <div class="desc">
      <span>{{product.desc.slice(0,20) + '...'}}</span>
    </div>
      <div class="price">{{'￥' + product.price}}
    </div>
    <div class="count">
      {{'x'+ product.count}}
    </div>
  </div>
</template>

<script>
export default {
    name:"goodsItem",
    props:{
        product:{
            type:Object,
            default(){
              return {}
            }
        }
    },
   
}
</script>

<style scoped>
.goods{
  border-bottom: 1px solid;
  position: relative;
  height: 100px;
}
.img{
  position: absolute;
  width: 50px;
  height: 70px;
  left: 20px;
  top: 13px;
  border-radius: 5px;
}
.desc{
  font-size: 10px;
  position: absolute;  
  left: 75px;
  top:40px;
}
.title{
  position: absolute;
  left: 75px;
  top: 13px;
}
.check{
  position: absolute;
  top:40px;
}
.price{
  position: absolute;
  left: 75px;
  top: 60px;
  color:rgb(250, 77, 77);
}
.count{
  position: absolute;
  right:10px;
  bottom: 15px;
}
</style>
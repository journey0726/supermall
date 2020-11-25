<template>
  <Tabbar>
    <Tabbaritem path='/home' activeColor='rgb(18,150,219)'>
      <img slot="item-img" src="@/assets/img/tabbar/home.svg" alt="">
      <img slot="item-active-img" src="@/assets/img/tabbar/afterHome.svg" alt="">
     <div slot="item-text">首页</div>
    </Tabbaritem>
    <Tabbaritem path='/category' activeColor='rgb(18,150,219)'>
      <img   slot="item-img" src="@/assets/img/tabbar/category.svg" alt="">
      <img slot="item-active-img" src="@/assets/img/tabbar/aftercategory.svg" alt="">
     <div slot="item-text">分类</div>
    </Tabbaritem>
    <Tabbaritem path='/cart' activeColor='rgb(18,150,219)'>
      <img slot="item-img" src="@/assets/img/tabbar/shoppingCart.svg" alt="">
      <img slot="item-active-img" src="@/assets/img/tabbar/afterShoppingCart.svg" alt="">
     <div slot="item-text">购物车</div>
    </Tabbaritem>
    <Tabbaritem path = '/profile' activeColor='rgb(18,150,219)'>
      <img slot="item-img" src="@/assets/img/tabbar/profile.svg" alt="">
      <img  slot="item-active-img" src="@/assets/img/tabbar/afterProfile.svg" alt="">
      <div slot="item-text">我的</div>
    </Tabbaritem>
  </Tabbar>
  
</template>

<script>
import Tabbar from '../commom/tabbar/tabbar.vue'
import Tabbaritem from '../commom/tabbar/tabbaritem.vue'
export default {
  name:'MainTabbar',
  components:{
    Tabbar,
    Tabbaritem,
  }
}
</script>

<style>

</style>
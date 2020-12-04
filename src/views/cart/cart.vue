<template>
<div>
  <nav-bar class="nav-bar">
    <div slot="center">购物车({{cartLength}})</div>
  </nav-bar>
  <goods></goods>
  <total></total>
</div>

</template>

<script>
import NavBar from "@/components/commom/navbar/NavBar.vue";
import Goods from './childComps/goods'
import { mapGetters } from 'vuex'
import total from './childComps/total.vue'
export default {
  name:'cart',
  components: { 
    NavBar,
    Goods,
     total
     },
  computed:{
   ...mapGetters(['cartLength'])
 }
}
</script>

<style scoped>

  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
    z-index: 9;
  }
</style>
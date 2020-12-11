<template>
  <div id='category'>
    <NavBar id="navBar">
      <div slot="center">分类</div>
    </NavBar>
    <category-left :title='categoryList'></category-left>
  <Scroll class="content" :pullUpLoad="true" :probe-type='3'>
    <categoryRight></categoryRight>
  </Scroll>
  </div>
</template>

<script>
import {getCategory} from '@/network/category.js'
import NavBar from '@/components/commom/navbar/NavBar.vue'
import categoryLeft from './childComps/categoryLeft.vue'
import categoryRight from './childComps/categoryRight.vue'
import Scroll from '@/components/commom/scroll/Scroll.vue'


export default {
  name:'category',
  components:{
    categoryLeft,
    categoryRight,
    NavBar,
    Scroll,
    

  },
  data(){
    return {
      categoryList:[],
     
    }
  },
  created(){
    this.getCategory()
  },
 
  methods:{
    getCategory(){
      getCategory().then(res =>{
        this.categoryList = res.data.category.list
        console.log(res);
      })
    },
  
   
  }

}
</script>

<style scoped>
#category{
  height:calc(100vh - 49px);
}
  #navBar{
    background-color: var(--color-tint);
    color: #fff;
  }
  .content {
  height: calc(100% - 44px);
  overflow: hidden;
}
</style>
<template>
  <div>
    <NavBar id="category">
      <div slot="center">分类</div>
    </NavBar>
    <category-left :title='categoryList'></category-left>
    
  </div>
</template>

<script>
import {getCategory} from '@/network/category.js'
import NavBar from '@/components/commom/navbar/NavBar.vue'
import categoryLeft from './childComps/categoryLeft.vue'
import categoryRight from './childComps/categoryRight.vue'

export default {
  name:'category',
  components:{
    categoryLeft,
    categoryRight,
    NavBar,

  },
  data(){
    return {
      categoryList:[]
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
    }
  }

}
</script>

<style scoped>
  #category{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
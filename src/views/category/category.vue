<template>
  <div id='category'>
    <NavBar id="navBar">
      <div slot="center">分类</div>
    </NavBar>
    <category-left :title='categoryList'></category-left @categoryClick='changeList'>
  <Scroll class="content" :pullUpLoad="true" :probe-type='3'>
    <categoryRight></categoryRight>
  </Scroll>
  </div>
</template>

<script>
import {getCategory,getCategoryInfo} from '@/network/category.js'
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
      goodsList:[],
      number:Number
    }
  },
  created(){
    this.getCategory()
  },
  mounted(){
    this.getCategoryInfo(3627)
  },
  methods:{
    getCategory(){
      getCategory().then(res =>{
        this.categoryList = res.data.category.list
        console.log(res);
      })
    },
    getCategoryInfo(maitKey){
        
        getCategoryInfo(maitKey).then(res=>{
          this.goodsList = res;
          console.log(res);
        })
    },
    changeList(index){
      this.number = index;
      console.log(this.number);
    }
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
<template>
  <div id='category'>
    <NavBar id="navBar">
      <div slot="center">分类</div>
    </NavBar>
    <category-left :title='categoryList' ref="left" @changeIndex='changeIndex'></category-left>
  
    <categoryRight :goodsList='goodsList'></categoryRight>
  </div>
</template>

<script>
import {getCategory,getCategoryInfo} from '@/network/category.js'
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
      categoryList:[],
      goodsList:null
    }
  },
  created(){
    this.getCategory()
  },
  mounted(){
    this.getCategoryInfo(this.$refs.left.currentMaitKey)
  },
 
  methods:{
    async getCategory(){
      getCategory().then(res =>{
        this.categoryList = res.data.category.list
        // if(res){
        //   this.$refs.left.itemClick(0)
        // }
        
        console.log(res);
      })
    },
     async getCategoryInfo(maitKey) {
      getCategoryInfo(maitKey).then((res) => {
        this.goodsList = res.data.list;
        console.log(this.goodsList);
        // this.$bus.$emit('changList',this.goodsList)
      });  
       
    },
   changeIndex(){
     this.getCategoryInfo(this.$refs.left.currentMaitKey)
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

</style>
<template>
  <div>
    分类
  </div>
</template>

<script>
import {getCategory} from '@/network/category.js'
export default {
  name:'category',
  created(){
    this.getCategory()
  },
  methods:{
    getCategory(){
      getCategory().then(res =>{
        console.log(res);
      })
    }
  }

}
</script>

<style>

</style>
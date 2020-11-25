<template>
  <div class="tab-bar-item" @click="itemClick">
      <slot v-if="!isActive" name="item-img"></slot>
      <slot v-else name="item-active-img"></slot>
      <div :style='activeStyle'><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
    name:'Tabbaritem',
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'red'
      }
     
    },
    data(){
        return{
           
        }
    },
    computed:{
      isActive(){
        // return !this.$route.path.indexOf(this.path)
        return this.$route.path===this.path
      },
      activeStyle(){
        return this.isActive?{color:this.activeColor}:{}
      }
    },
    methods:{
      itemClick(){      
        this.$router.push(this.path).catch(err=>err)  
      }
    }
}
</script>

<style>

.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  margin: auto;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  
}
/* .active{
    color: activeColor
} */
</style>
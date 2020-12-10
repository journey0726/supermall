<template>
<div class="left">
    <div class="list" 
    :class="{isActive:currentIndex==index}" 
     v-for="(item,index) in title"
      @click="itemClick(index)">
        <p class="listItem">{{item.title}}</p>
    </div>
    
</div>
</template>

<script>
export default {
    name:'categoryLeft',
    props:{
        title:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            currentIndex:0
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex = index;
            this.$emit("categoryClick",this.currentIndex)  
        },

    },

}
</script>

<style scoped>
.left{
    width: 25%;
    background-color: #f6f6f6;
}
.list{
    line-height: 25px;
    }
.listItem{
    border-bottom: 1px solid pink;
    border-right: 1px solid pink;
    display: flex;
    width: 100%;
    text-align: center;
    display: inline-block;
    padding-bottom: 4px;
    line-height: 16px;
} 
.listItem:first-child{
    padding-top: 3px;
}
.isActive{
    background-color: rgba(12, 171, 245, 0.897);
    color: #fff;
}
   
</style>
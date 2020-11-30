<template>
<div>
    <nav-bar>
        <div slot="left" class="back" @click="clickBack">
            <img src="@/assets/img/common/back.svg" alt="">
        </div>
        <div slot="center" class="title">
            <div v-for="(item,index) in title" class="titleItem"
             @click="itemClick(index)"
             :class="{click:index===currentIndex}">
             {{item}}
             </div>
        </div>
        </nav-bar>
</div>
  
</template>

<script>
import NavBar from '@/components/commom/navbar/NavBar.vue'
export default {
    name:"DetailNavBar",
    components:{
        NavBar
    },
    data(){
        return{
            title:['商品','参数','评论','推荐'],
            currentIndex:0
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex = index
            this.$emit('titleClick',index)
        },
        clickBack(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
    .title{
        display: flex;
    }
    .titleItem{
        flex: 1;
    }
    .click{
        color: var(--color-high-text)
    }
    .back img{
        margin-top: 12px;
    }
</style>
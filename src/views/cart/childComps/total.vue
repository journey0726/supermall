<template>
<div class="total">
    <label for="all" class="all"  >
    <input type="checkbox" id = 'all' :checked ='isAllSelect' @click="isClick"> 全选
    </label>
    <div class="totalPrice"> 
    <p>合计:￥{{totalPrice}}</p>
    <div class="calculate" @click="calcClick">
           去计算({{checkLength}})    
    </div>

    </div>
</div>
</template>

<script>
export default {
    name:'total',
    computed:{
        totalPrice(){
            return this.$store.state.cartList.filter(item => item.checked)
            .reduce((preValue,item) =>{
                return preValue + item.price * item.count
            } ,0).toFixed(2)
        },
        checkLength(){
            return this.$store.state.cartList.filter(item => item.checked)
            .reduce((preValue,item) => {
                return preValue + item.count
            },0)
        },
        isAllSelect(){
            if(this.$store.state.cartList.filter(item => item.checked).length === this.$store.state.cartList.length){
                if(this.$store.state.cartList.length ===0) return false;
                return true;
            }
            
        }
    },
    methods:{
        isClick(){
            if(this.$store.state.cartList.filter(item => item.checked).length === this.$store.state.cartList.length){
                // for(items in this.$store.state.cartList){
                //     items.checked = !items.checked
                // }
                this.$store.state.cartList.forEach(item => item.checked = false)
            }
            else {
                //  for(items of this.$store.state.cartList){
                //     items.checked = true;
                // }
                  this.$store.state.cartList.forEach(item => item.checked = true)
            }
        },
        calcClick(){
            if(!this.checkLength)
                this.$toast.show('请选择购买的商品')
        }
    }
}
</script>

<style scoped>
    .total{
        position: relative;
       height: 40px;
       border-top: 1px solid pink;
    }
    .all{
        margin-left:5px ;
        line-height: 40px;
        font-size: 15px;
        margin-right:20px ;
    }
    
    .totalPrice{
        /* position: absolute;
        top: 10px;
        right: 10px; */
        display: inline-block;
    }
    .calculate{
        position: absolute;
        line-height: 40px;
        top: 0px;
        text-align: center;
        right: 0px;
        width: 100px;
        height: 40px;
        background: rgb(230, 112, 112);
        color: blanchedalmond;
        
    }
</style>
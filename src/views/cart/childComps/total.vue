<template>
<div>
    <input type="checkbox">
    <p>合计:￥ + {{totalPrice}}</p>
    <div>{{count}}</div>
</div>
</template>

<script>
export default {
    name:'total',
    props:{
        totalPrice:{
            type:Number,
            default(){
                return 0;
            }
        }
    }
}
</script>

<style>

</style>
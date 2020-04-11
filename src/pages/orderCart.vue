<!--order是主页面，orderList,orderConfirm,orderCart,orderPay嵌套在router-view中-->
<template>
    <div>
        <order-header></order-header>
        cart
        <nav-footer></nav-footer>
    </div>
</template>

<script>
    import OrderHeader from "../components/OrderHeader";
    import NavFooter from "../components/NavFooter";
    export default {
        name:'cart',
        components:{
            OrderHeader,
            NavFooter
        }
    }
</script>

<style>

</style>

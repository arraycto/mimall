import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Cart from './pages/orderCart'
import Order from './pages/order'
import OrderConfirm from './pages/orderConfirm'
import OrderList from './pages/orderList'
import OrderPay from './pages/orderPay'
import AliPay from './pages/alipay'

//加载插件
Vue.use(Router);

export default new Router({
   routes:[
       {
           path:"/",
           name:'home',
           component: Home,
           children:[
               {
                   path:"index",
                   name:'index',
                   component: Index,
               },
               {
                   path:"product/:id",
                   name:'product',
                   component: Product,
               },
               {
                   path:"detail/:id",
                   name:'detail',
                   component: Detail,
               }
           ],
           // redirect:'/index'
       },
       // 为了不出现/order/cart这样比较难看的路由,单独提取出来
       {
           path:"/cart",
           name:'cart',
           component: Cart,
       },
       {
           path:"/order",
           name:'order',
           component: Order,
           children:[
               {
                   path:"confirm",
                   name:'order-confirm',
                   component: OrderConfirm,
               },
               {
                   path:"list",
                   name:'order-list',
                   component: OrderList,
               },
               {
                   path:"pay",
                   name:'order-pay',
                   component: OrderPay,
               },
               {
                   path:"alipay",
                   name:'alipay',
                   component: AliPay,
               }
           ]
       },
   ]
});


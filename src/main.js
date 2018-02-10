import Vue from 'vue';
import App from './app.vue';
//1引入组件
import Home from './components/home.vue';
import List from './components/list.vue';
import ShopCart from './components/shopcart.vue';
import Member from './components/member.vue';
import NotFound from './components/notfond.vue';
import Map from './components/map.vue';
// 引入自定义组件。index.js是组件的默认入口
import Loading from './components/loading'
Vue.use(Loading);
// 2引入路由并安装插件
import VueRouter from 'vue-router';
Vue.use(VueRouter);
//创建对象并配置路由规则
let router = new VueRouter({
    linkActiveClass:'mui-active',
    // mode: 'history',
    routes:[
        {path:'/',redirect:{name:'home'}},
        {name:'home',path:'/home',component:Home},
        {name:'list',path:'/list',component:List},
        {name:'shopcart',path:'/shopcart',component:ShopCart},
        {name:'member',path:'/member',component:Map},
        {name:'404',path:'/*',component:NotFound},
    ]
})
//3引入mint-ui并安装插件
import  Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);
//4hello-mui的样式
import './asset/vender/hellomui/css/mui.css';
//全局样式
import './asset/style/base.css';
//5引入axios发起请求
import Axios from 'axios';
Vue.prototype.$axios = Axios;
//默认配置
// this.$axios.defaults.baseURL = 'https://www.baidu.com';   //配置接口地址

new  Vue({
    el:'#app',
    router:router,
    render:c=>c(App)
})
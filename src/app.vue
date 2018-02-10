<template>
    <div>
        <mt-header fixed title="">
            <router-link to="/" slot="left">
                <img src="./asset/image/login.png" alt="" class="logo">
            </router-link>
            <mt-button icon="search" slot="right"></mt-button>
        </mt-header>
        <router-view class="con"></router-view>
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" :to="{name:'home'}">
                <span class="mui-icon icon-shop2"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" :to="{name:'list'}">
                <span class="mui-icon icon-th-large-copy"></span>
                <span class="mui-tab-label">分类</span>
            </router-link>
            <router-link class="mui-tab-item" :to="{name:'shopcart'}">
                <span class="mui-icon icon-gouwuche"></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" :to="{name:'member'}">
                <span class="mui-icon icon-huiyuanzhongxin"></span>
                <span class="mui-tab-label">会员中心</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        /*created(){
            this.$axios.get('http://localhost:3000/list_json').then(res=>{
                console.log(res)
            })
        }*/
    }
</script>

<style scoped>
    .con{
        padding-top: 40px;
        padding-bottom:50px;
    }
    .mint-header{
        background: white;
        color:#333
    }
    .logo{
        max-width: 36px;
    }
    .mint-header-button i{ color: #000}
    .mintui{
        font-size: 20px !important;
    }
</style>
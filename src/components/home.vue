<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item><img src="../asset/image/banner.gif" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../asset/image/banner.gif" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../asset/image/banner.gif" alt=""></mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link :to="{name:'home'}">
                <img src="../asset/image/ad01.jpg" alt="">
                <div class="mui-media-body">新品尝鲜</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link :to="{name:'list'}">
                    <img src="../asset/image/ad02.gif" alt="">
                    <div class="mui-media-body">订单查询</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link :to="{name:'list'}">
                    <img src="../asset/image/ad03.gif" alt="">
                    <div class="mui-media-body">果品精选</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link :to="{name:'list'}">
                    <img src="../asset/image/ad04.gif" alt="">
                    <div class="mui-media-body">特享优惠</div>
                </router-link>
            </li>
        </ul>
        <!--新品推荐-->
        <h4 class="title">新品推荐</h4>
        <ul class="new_intro">
            <li>
                <img src="../asset/image/new1.png" alt="">
                <div class="txt">
                    <p>进口南非葡萄柚子</p>
                    <span>&yen;10/个</span>
                </div>
            </li>
            <li>
                <img src="../asset/image/new1.png" alt="">
                <div class="txt">
                    <p>新奇士美国脐橙</p>
                    <span>&yen;20/个</span>
                </div>
            </li>
            <li>
                <img src="../asset/image/new3.png" alt="">
                <div class="txt">
                    <p>进口南非葡萄柚子</p>
                    <span>&yen;30/个</span>
                </div>
            </li>
        </ul>
        <!--猜你喜欢-->
        <h4 class="title">猜你喜欢</h4>
        <img src="../asset/image/1.png" alt="" class="ad">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="../asset/image/pro.png">
                    <div class="mui-media-body">
                        <p class="pro-tilte">跨越半个地球的脆嫩鲜甜</p>
                        <p class='mui-ellipsis'>泰国红毛丹 进口新鲜水果</p>
                        <p class="price">
                            <span class="tehui">特惠</span>
                            199.<em>9</em>元/斤
                        </p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="../asset/image/pro2.png">
                    <div class="mui-media-body">
                        <p class="pro-tilte">跨越半个地球的脆嫩鲜甜</p>
                        <p class='mui-ellipsis'>泰国红毛丹 进口新鲜水果</p>
                        <p class="price">
                            <span class="tehui">特惠</span>
                            199.<em>9</em>元/斤
                        </p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="../asset/image/pro.png">
                    <div class="mui-media-body">
                        <p class="pro-tilte">跨越半个地球的脆嫩鲜甜</p>
                        <p class='mui-ellipsis'>泰国红毛丹 进口新鲜水果</p>
                        <p class="price">
                            <span class="tehui">特惠</span>
                            199.<em>9</em>元/斤
                        </p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="../asset/image/pro2.png">
                    <div class="mui-media-body">
                        <p class="pro-tilte">跨越半个地球的脆嫩鲜甜</p>
                        <p class='mui-ellipsis'>泰国红毛丹 进口新鲜水果</p>
                        <p class="price">
                            <span class="tehui">特惠</span>
                            199.<em>9</em>元/斤
                        </p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="../asset/image/pro.png">
                    <div class="mui-media-body">
                        <p class="pro-tilte">跨越半个地球的脆嫩鲜甜</p>
                        <p class='mui-ellipsis'>泰国红毛丹 进口新鲜水果</p>
                        <p class="price">
                            <span class="tehui">特惠</span>
                            199.<em>9</em>元/斤
                        </p>
                    </div>
                </a>
            </li>
        </ul>


    </div>

</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>
    .mint-swipe{
        max-height:220px;
        height: 220px;
    }
    .mint-swipe img{
        width:100%;
        height: 100%;
    }
    .mui-grid-view li{
        width:25%;
    }
    .mui-grid-view img{
        width:80%
    }
    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
        font-size:0.2rem
    }
    .mui-grid-view.mui-grid-9{
        background:#ffffff;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border-right: 0;
        border-bottom:1px solid #CBCBCB
    }
    .title{
        color: #44C200;
        text-align: center;
        background: #EEEEEE;
        font-size: 1.2rem;
        height: 2.4rem;
        max-height: 2.4rem;
        line-height: 2.4rem;
        margin:0;
        font-weight: normal;
        position: relative;
    }
    .title:before{
        width: 20%;
        height:3px;
        background:#44C200 ;
        content: "";
        position: absolute;
        top: 1rem;
        left: 15%;
    }
    .title:after{
        width: 20%;
        height:3px;
        background:#44C200 ;
        content: "";
        position: absolute;
        top: 1rem;
        right: 15%;
    }
    .new_intro li{
        list-style: none;
        float: left;
        width: 33.3%;
        position: relative;
        box-sizing: border-box;
        padding: 0 2px;
        background: #eeeeee;
    }
    .new_intro img{max-width: 100%;font-size: 0}
    .new_intro .txt{
        width:100%;
        position: absolute;
        bottom: 5px;
        text-align: center;
    }
    .new_intro .txt p{
        color:#44C200
    }
    .new_intro .txt span{
        color:#999999;
        font-size:0.5rem;
    }
    .mui-table-view .mui-media-object{
        max-width: 100px;
        width:100px;
        height: auto;
    }
    .price{
        color: #FF3433;
        font-size: 1.2rem;
    }
    .tehui{
        width: 60px;
        height: 24px;
        background: #FF3433;
        color: #fff;
        display: inline-block;
        border-radius: 12px;
        text-align: center;
        line-height: 24px;
        font-size: 0.6rem;
    }
    .pro-tilte{
        font-size: 1.2rem;
        color: #349C01;
        padding-bottom: 3px;
    }
    .mui-ellipsis{
        padding:5px 0
    }
    .ad{width: 100%;
        background: #eeeeee;
        padding: 0 5px;
    padding-bottom: 10px}
</style>
<template>
    <div id="map">
        <div vid="amapDemo" class="amap-demo">
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    // 引入高德地图
    import VueAMap from 'vue-amap';
    Vue.use(VueAMap);
    VueAMap.initAMapApiLoader({
        key: '44d90ffe5422bd9625a864523a362192',
        plugin: ['VueAMap.Scale', 'VueAMap.OverView', 'VueAMap.ToolBar', 'VueAMap.MapType'],
        uiVersion: '1.0.11'
    });
    export default {
        name: "map",
    }
</script>

<style scoped>
    .amap-demo {
        height: 300px;
    }
</style>
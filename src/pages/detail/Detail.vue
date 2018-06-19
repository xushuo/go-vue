<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div class="content"></div>
    </div>
</template>
<script>
    import DetailBanner from './components/Banner'
    import DetailHeader from './components/Header'
    import axios from 'axios'
    import {mapState} from 'vuex'
    export default {
        name : 'Detail',
        components : {
            DetailBanner,
            DetailHeader
        },
        data(){
            return {}
        },
        methods : {},
        computed : {},
        mounted(){
        }
    }
</script>
<style scoped lang="scss" type="text/scss">
    .content{
       height: 50rem;
    }
</style>

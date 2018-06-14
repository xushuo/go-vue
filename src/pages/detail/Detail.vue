<template>
    <div>
        <detail-banner></detail-banner>
    </div>
</template>
<script>
    import DetailBanner from './components/Banner'
    import axios from 'axios'
    import {mapState} from 'vuex'
    export default {
        name : 'Detail',
        components : {
            DetailBanner
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

</style>

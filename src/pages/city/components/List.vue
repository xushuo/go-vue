<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">
                    当前城市
                </div>
                <div class="button-list">
                    <div class="button-wrapperr">
                        <div class="button">{{this.currentCity}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">
                    热门城市
                </div>
                <div class="button-list">
                    <div class="button-wrapperr" v-for="hot of hotCities" :key="hot.id" @click="handleCityClick(hot.name)">
                        <div class="button">{{hot.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area border-topbottom" v-for="(city,key) of cities" :key="key" :ref="key">
                <div class="title">
                    {{key}}
                </div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="item of city" :key="item.id" @click="handleCityClick(item.name)">
                        {{item.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import BScroll from 'better-scroll'
    import {mapState, mapMutations} from 'vuex'
    export default {
        name : 'CityList',
        props : {
            hotCities : Array,
            cities : Object,
            letter : String
        },
        computed : {
            ...mapState({
                currentCity : 'city'
            })
        },
        mounted (){
            this.scroll = new BScroll(this.$refs.wrapper)
        },
        methods : {
            handleCityClick(name){
                //    this.$store.dispatch('changeCity', name)
                /*this.$store.commit('changeCity', name)*/
                this.changeCity(name)
                this.$router.push('/')
            },
            ...mapMutations(['changeCity'])
        },
        watch : {
            letter (){
                if(this.letter){
                    const element = this.$refs[this.letter][0]
                    this.scroll.scrollToElement(element)
                }
            }
        }
    }
</script>
<style scoped lang="scss" type="text/scss">
    @import "~css/theme.scss";
    .list{
        position:absolute;
        overflow:hidden;
        top:1.58rem;
        left:0;
        right:0;
        bottom:0;
        .border-topbottom:before{
            border-color:#777;
        }
        .border-topbottom:after{
            border-color:#777;
        }
        .border-bottom:before{
            border-color:#777;
        }
        .area{
            .title{
                line-height:.54rem;
                background:#eee;
                padding-left:.2rem;
                color:#666;
                font-size:.26rem;
            }
            .button-list{
                overflow:hidden;
                padding:.1rem .6rem .1rem .1rem;
                .button-wrapperr{
                    width:33.33%;
                    float:left;
                    .button{
                        margin:.1rem;
                        padding:.1rem 0;
                        text-align:center;
                        border-radius:.06rem;
                        border:.02rem solid #ccc
                    }
                }
            }
            .item-list{
                .item{
                    line-height:.76rem;
                    padding-left:.2rem;
                }
            }
        }
    }
</style>

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'css/reset.css'
import 'css/border.css'
import 'css/iconfont.css'
import 'swiper/dist/css/swiper.css'

import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false
fastclick.attach(document.body) //取消点击延迟
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
    el : '#app',
    router,
    store,
    components : {App},
    template : '<App/>'
})

/*document.addEventListener('deviceready', function(){
 new Vue({
 el : '#app',
 router,
 components : {App},
 template : '<App/>'
 })
 window.navigator.splashscreen.hide()
 }, false);*/

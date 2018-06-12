import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        city : "北京"
    },
 /*   actions : {
        changeCity(ctx, data){
            ctx.commit('changeCity', data)
        }
    },*/
    mutations : {
        changeCity(state, data){
            state.city = data
        }
    }
})
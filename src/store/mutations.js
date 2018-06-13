/**
 * Created by jike on 2018/6/13.
 */
export default {
    changeCity(state, data){
        state.city = data
        try{
            localStorage.city = data;
        } catch (e) {
        }
    }
}
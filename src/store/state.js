/**
 * Created by jike on 2018/6/13.
 */
let defaultCity = "北京"
try{
    if(localStorage.city){
        defaultCity = localStorage.city
    }
} catch (e) {
}
export default {
    city : defaultCity
}
import { reactive } from "vue";

const store = reactive({
    userInfo: {
        city:'全国',
        token:'',
        isLogin:false
    }
})

export default store;
import { createApp } from 'vue';
import App from './App.vue';
import Router from './common/router';
import qs from 'qs';
import FetchUtils from '@/util/FetchUtil.js';
import store from "@/common/store.js";
import { Swipe, SwipeItem, Lazyload } from 'vant';
console.log(location)
const urlParams = qs.parse((location.href.split('?')[1] || '').split('#')[0], { ignoreQueryPrefix: true })
const {
    domain,
    token
} = urlParams
FetchUtils.init({
    domain
});
store.userInfo.token = token;
const app = createApp(App);

// 注入公共方法
app.config.globalProperties.$FetchUtils = FetchUtils;

app.use(Router).use(Swipe).use(SwipeItem).use(Lazyload).mount('#app')

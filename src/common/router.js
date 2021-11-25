import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import Home from '@/views/home/index.vue';
import store from '@/common/store.js';
import UserUtils from '@/util/UserUtils.js';
const Router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '主页'
      }
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('@/views/mine/index.vue'),
      meta: {
        title: '我的',
        keepAlive:true
      }
    },
  ]
})

/**
 * 路由守卫
 * 每次进入之前更改页面标题
 */
Router.beforeEach(async (to, from, next) => {
  
  if(to.meta.title){
    document.title = to.meta.title
  }

  // if (!store.userInfo.isLogin){
  //   try {
  //     await UserUtils.login();
  //   } catch(err) {
  //     alert(err.msg || err);
  //   }
  // }

  next()
})

export default Router
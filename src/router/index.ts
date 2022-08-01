import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
import { defineAsyncComponent } from 'vue'

const router: any = createRouter({ 
  // history: createWebHashHistory(),  // hash 模式
  history: createWebHistory(),  // history 模式
  routes: [
    {
      path: '/',
      name: 'home',
      component: defineAsyncComponent(() => import(`../views/home.vue`)),
      meta: {
        title: '首页',
      },
    },
    {
      path: '/upload',
      name: 'upload',
      component: defineAsyncComponent(() => import(`../views/upload.vue`)),
      meta: {
        title: '上传',
      },
    },
    {
      path: '/text',
      name: 'text',
      component: defineAsyncComponent(() => import(`../views/text.vue`)),
      meta: {
        title: '文字',
      },
    },
    {
      path: '/*',
      redirect: '/',
    },
  ]
})

// 全局路由守卫
router.beforeEach((to: any, from: any, next: any)=>{
  // console.log(to, from)
  if (to.meta.title) {
    document.title = `${to.meta.title}`;
  }
  next()
})

router.afterEach((to: any, from: any)=>{
  // console.log(to, from)
  console.log('afterEach')
})

export default router
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Home,
      redirect: '/home',
      children: []
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: { // 附加数据
        desc: '首页', // 描述 - 用于展示菜单名称
        authority: '',
        icon: 'el-icon-info'
      },
      children: [
        {
          path: '123',
          component: Home,
          meta: { // 附加数据
            desc: '首页', // 描述 - 用于展示菜单名称
            authority: '',
            icon: ''
          }
        },
        {
          path: '4123',
          component: Home,
          meta: { // 附加数据
            desc: '首页', // 描述 - 用于展示菜单名称
            authority: '', // 权限
            icon: '' // 图标
          }
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: {
        desc: '关于我',
        authority: '',
        icon: ''
      },
      children: []
    }
  ]
})

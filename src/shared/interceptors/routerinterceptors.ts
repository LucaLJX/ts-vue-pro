import router from '@/router'

/**
 * 路由拦截
 * Created by slipkinem on 2018/10/19 at 下午3:53.
 */

/**
 * 这里可以做一些拦截的操作
 * 如用户如果没有登陆
 * 则跳转登陆页面等
 */
router.beforeEach(((to, from, next) => {
  console.log(to)
  console.log(from)
  console.log(next)
  next()
}))

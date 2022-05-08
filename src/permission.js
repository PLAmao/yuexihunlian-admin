import router from '@/router'
import store from '@/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { admin } from '@/utils/permission'
// import Cookies from 'js-cookie'

/**
 * 进入页面先判断权限
 * @param {*} userRoles 用户的角色
 * @param {*} routerRoles 能进入路由的角色
 */
/* eslint-disable */
function hasPermission(userRoles, routerRoles) {
  // 超级管理员权限，直接通过
  if (userRoles.indexOf(admin) >= 0) return true
  // 不需要权限的页面，直接通过
  if (!routerRoles) return true
  // 需要权限的页面，判断当前用户角色有没有权限
  return userRoles.some(item => routerRoles.indexOf(item) >= 0)
}
/* eslint-disable */

router.beforeEach(async (to, from, next) => {
  NProgress.start() // 开启nprogress
  // 根据vuex中的菜单信息和团队信息判断是否登录了
  if (store.getters.menus && store.getters.menus.length) {
    next()
    // if (hasPermission(store.getters.roles, to.meta.roles)) {
    // } else {
    //   next({ path: '/404' })
    // }
  } else {
    try {
      store.commit('SET_APP_LOADING', true)
      store.dispatch('GET_USER_INFO').catch(err => {
        throw err
      })
      store.dispatch('GET_TEAM_INFO').catch(err => {
        throw err
      })
      // 获取菜单信息
      const menus = await store.dispatch('GET_MENUS')
      // 生产可访问的路由表
      await store.dispatch('GENERATE_ROUTERS', menus)
      // 动态添加路由表
      router.addRoutes(store.getters.addRouters)
      next({ ...to })
      store.commit('SET_APP_LOADING', false)
    } catch (err) {
      store.commit('SET_APP_LOADING', false)
      console.log(err)
    }
  }
  next()
})

router.afterEach((to) => {
  NProgress.done() // 关闭nprogress
})

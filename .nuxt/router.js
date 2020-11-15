import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5754b6a5 = () => interopDefault(import('../pages/css.vue' /* webpackChunkName: "pages/css" */))
const _0fc23cb1 = () => interopDefault(import('../pages/demo.vue' /* webpackChunkName: "pages/demo" */))
const _c1ff6690 = () => interopDefault(import('../pages/timestamp.vue' /* webpackChunkName: "pages/timestamp" */))
const _e8e0b918 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/css",
    component: _5754b6a5,
    name: "css"
  }, {
    path: "/demo",
    component: _0fc23cb1,
    name: "demo"
  }, {
    path: "/timestamp",
    component: _c1ff6690,
    name: "timestamp"
  }, {
    path: "/",
    component: _e8e0b918,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

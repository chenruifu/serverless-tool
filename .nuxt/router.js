import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0fc23cb1 = () => interopDefault(import('../pages/demo.vue' /* webpackChunkName: "pages/demo" */))
const _2ee22960 = () => interopDefault(import('../pages/demo1.vue' /* webpackChunkName: "pages/demo1" */))
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
    path: "/demo",
    component: _0fc23cb1,
    name: "demo"
  }, {
    path: "/demo1",
    component: _2ee22960,
    name: "demo1"
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

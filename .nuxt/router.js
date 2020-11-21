import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _70b8be02 = () => interopDefault(import('../pages/develop.vue' /* webpackChunkName: "pages/develop" */))
const _15e5b94a = () => interopDefault(import('../pages/life.vue' /* webpackChunkName: "pages/life" */))
const _3b461186 = () => interopDefault(import('../pages/media.vue' /* webpackChunkName: "pages/media" */))
const _3f91c308 = () => interopDefault(import('../pages/app/agecalc.vue' /* webpackChunkName: "pages/app/agecalc" */))
const _8150b476 = () => interopDefault(import('../pages/app/csstransform.vue' /* webpackChunkName: "pages/app/csstransform" */))
const _4dd5334c = () => interopDefault(import('../pages/app/img2base64.vue' /* webpackChunkName: "pages/app/img2base64" */))
const _1f620ffc = () => interopDefault(import('../pages/app/imgsizescale.vue' /* webpackChunkName: "pages/app/imgsizescale" */))
const _4b608a08 = () => interopDefault(import('../pages/app/shengxiao.vue' /* webpackChunkName: "pages/app/shengxiao" */))
const _bbc82f6c = () => interopDefault(import('../pages/app/timestamp.vue' /* webpackChunkName: "pages/app/timestamp" */))
const _8edf781a = () => interopDefault(import('../pages/app/timetransform.vue' /* webpackChunkName: "pages/app/timetransform" */))
const _5ea93500 = () => interopDefault(import('../pages/app/video2img.vue' /* webpackChunkName: "pages/app/video2img" */))
const _cdc45fc4 = () => interopDefault(import('../pages/app/xingzuo.vue' /* webpackChunkName: "pages/app/xingzuo" */))
const _0402b5e1 = () => interopDefault(import('../pages/other/report.vue' /* webpackChunkName: "pages/other/report" */))
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
    path: "/develop",
    component: _70b8be02,
    name: "develop"
  }, {
    path: "/life",
    component: _15e5b94a,
    name: "life"
  }, {
    path: "/media",
    component: _3b461186,
    name: "media"
  }, {
    path: "/app/agecalc",
    component: _3f91c308,
    name: "app-agecalc"
  }, {
    path: "/app/csstransform",
    component: _8150b476,
    name: "app-csstransform"
  }, {
    path: "/app/img2base64",
    component: _4dd5334c,
    name: "app-img2base64"
  }, {
    path: "/app/imgsizescale",
    component: _1f620ffc,
    name: "app-imgsizescale"
  }, {
    path: "/app/shengxiao",
    component: _4b608a08,
    name: "app-shengxiao"
  }, {
    path: "/app/timestamp",
    component: _bbc82f6c,
    name: "app-timestamp"
  }, {
    path: "/app/timetransform",
    component: _8edf781a,
    name: "app-timetransform"
  }, {
    path: "/app/video2img",
    component: _5ea93500,
    name: "app-video2img"
  }, {
    path: "/app/xingzuo",
    component: _cdc45fc4,
    name: "app-xingzuo"
  }, {
    path: "/other/report",
    component: _0402b5e1,
    name: "other-report"
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

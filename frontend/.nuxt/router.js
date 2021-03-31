import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _63c56138 = () => interopDefault(import('../pages/develop.vue' /* webpackChunkName: "pages/develop" */))
const _72898bb1 = () => interopDefault(import('../pages/life.vue' /* webpackChunkName: "pages/life" */))
const _731c8bff = () => interopDefault(import('../pages/media.vue' /* webpackChunkName: "pages/media" */))
const _77f6bec1 = () => interopDefault(import('../pages/app/agecalc.vue' /* webpackChunkName: "pages/app/agecalc" */))
const _9cefd4a8 = () => interopDefault(import('../pages/app/csstransform.vue' /* webpackChunkName: "pages/app/csstransform" */))
const _eec2b7fe = () => interopDefault(import('../pages/app/img2base64.vue' /* webpackChunkName: "pages/app/img2base64" */))
const _3b01302e = () => interopDefault(import('../pages/app/imgsizescale.vue' /* webpackChunkName: "pages/app/imgsizescale" */))
const _e536a716 = () => interopDefault(import('../pages/app/shengxiao.vue' /* webpackChunkName: "pages/app/shengxiao" */))
const _5530d9c3 = () => interopDefault(import('../pages/app/timestamp.vue' /* webpackChunkName: "pages/app/timestamp" */))
const _0c6dd0ec = () => interopDefault(import('../pages/app/timetransform.vue' /* webpackChunkName: "pages/app/timetransform" */))
const _f87f520e = () => interopDefault(import('../pages/app/video2img.vue' /* webpackChunkName: "pages/app/video2img" */))
const _5cfa6852 = () => interopDefault(import('../pages/app/xingzuo.vue' /* webpackChunkName: "pages/app/xingzuo" */))
const _bb55d668 = () => interopDefault(import('../pages/other/performance.vue' /* webpackChunkName: "pages/other/performance" */))
const _4f859d70 = () => interopDefault(import('../pages/other/report.vue' /* webpackChunkName: "pages/other/report" */))
const _7933c426 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _63c56138,
    name: "develop"
  }, {
    path: "/life",
    component: _72898bb1,
    name: "life"
  }, {
    path: "/media",
    component: _731c8bff,
    name: "media"
  }, {
    path: "/app/agecalc",
    component: _77f6bec1,
    name: "app-agecalc"
  }, {
    path: "/app/csstransform",
    component: _9cefd4a8,
    name: "app-csstransform"
  }, {
    path: "/app/img2base64",
    component: _eec2b7fe,
    name: "app-img2base64"
  }, {
    path: "/app/imgsizescale",
    component: _3b01302e,
    name: "app-imgsizescale"
  }, {
    path: "/app/shengxiao",
    component: _e536a716,
    name: "app-shengxiao"
  }, {
    path: "/app/timestamp",
    component: _5530d9c3,
    name: "app-timestamp"
  }, {
    path: "/app/timetransform",
    component: _0c6dd0ec,
    name: "app-timetransform"
  }, {
    path: "/app/video2img",
    component: _f87f520e,
    name: "app-video2img"
  }, {
    path: "/app/xingzuo",
    component: _5cfa6852,
    name: "app-xingzuo"
  }, {
    path: "/other/performance",
    component: _bb55d668,
    name: "other-performance"
  }, {
    path: "/other/report",
    component: _4f859d70,
    name: "other-report"
  }, {
    path: "/",
    component: _7933c426,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

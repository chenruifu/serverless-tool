<template>
    <div class="layout-default">
        <header class="header">
            <div class="header-wrap">
                <nuxt-link :to="{name: 'index'}" class="header-wrap__logo">在线工具站</nuxt-link>
                <a-menu class="header-wrap__menu" v-model="current" mode="horizontal" theme="dark">
                    <a-sub-menu>
                        <span slot="title">开发工具</span>
                        <a-menu-item key="1">时间戳转换</a-menu-item>
                        <a-menu-item key="2">CSS尺寸转换</a-menu-item>
                        <a-menu-item key="3">时间转换</a-menu-item>
                        <a-menu-item key="3">SVG转base64</a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu>
                        <span slot="title">多媒体</span>
                        <a-menu-item key="4">图片Base64编码</a-menu-item>
                        <a-menu-item key="5">图片尺寸比例</a-menu-item>
                        <a-menu-item key="6">视频截取缩略图</a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu>
                        <span slot="title">生活查询</span>
                        <a-menu-item key="setting:1">年龄计算器</a-menu-item>
                        <a-menu-item key="setting:2">生肖查询</a-menu-item>
                        <a-menu-item key="setting:3">星座查询</a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu>
                        <span slot="title">其他</span>
                        <a-menu-item key="setting:1">圆周率查询</a-menu-item>
                        <a-menu-item key="setting:2">456</a-menu-item>
                        <a-menu-item key="setting:3">789</a-menu-item>
                    </a-sub-menu>
                </a-menu>
                <a href="https://github.com/chenruifu/serverless-tool" class="header-wrap__github" target="_blank"></a>
            </div>
        </header>
        <main class="main">
            <section class="main-left"></section>
            <section class="main-right"></section>
        </main>
    </div>
</template>
<script>
import {Menu} from "ant-design-vue";
export default {
    components: {
        aMenu: Menu,
        aMenuItem: Menu.Item,
        aMenuItemGroup: Menu.ItemGroup,
        aSubMenu: Menu.SubMenu
    },
    data() {
        return {
            current: ['6'],
        }
    }
}
</script>
<style lang="less" scoped>
.layout-default {
	padding: 120px 0 0;
}
.header {
	position: fixed;
	top: 0;
	left: 0;
    width: 100%;
	background-color: #001529;
}
.header-wrap{
    position: relative;
    max-width: 1600px;
    min-width: 1200px;
    height: 60px;
    margin: 0 auto;
    color: #fff;
    &__logo{
        float: left;
        width: 200px;
        height: 60px;
        font-size: 20px;
        line-height: 60px;
    }
    &__menu{
        float: left;
        height: 60px;
        /deep/&.ant-menu-horizontal{
            line-height: 60px;
            font-size: 16px;
        }
    }
    &__github{
        position: absolute;
        right: 12px;
        top: 12px;
        width: 36px;
        height: 36px;
        background-image: url("data:image/svg+xml;base64,PHN2ZyB0PSIxNjAzMzgxNjk0NTk2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjExMTY2IiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiPjxwYXRoIGQ9Ik03ODcuNjk2OTQxIDY2OS41MTUyOTRjMCA0NC45MzU1MjktMjMuNDMxNTI5IDExOC4xODE2NDctNzguNzg3NzY1IDExOC4xODE2NDctNTUuNDE2NDcxIDAtNzguODQ4LTczLjI0NjExOC03OC44NDgtMTE4LjE4MTY0NyAwLTQ0Ljg3NTI5NCAyMy40MzE1MjktMTE4LjE4MTY0NyA3OC44NDgtMTE4LjE4MTY0NyA1NS4zNTYyMzUgMCA3OC43ODc3NjUgNzMuMzA2MzUzIDc4Ljc4Nzc2NSAxMTguMTgxNjQ3ek0zMTUuMDkwODI0IDU1MS4zMzM2NDdjLTU1LjM1NjIzNSAwLTc4Ljc4Nzc2NSA3My4zMDYzNTMtNzguNzg3NzY1IDExOC4xODE2NDcgMCA0NC45MzU1MjkgMjMuNDMxNTI5IDExOC4xODE2NDcgNzguNzg3NzY1IDExOC4xODE2NDcgNTUuMzU2MjM1IDAgNzguNzg3NzY1LTczLjI0NjExOCA3OC43ODc3NjUtMTE4LjE4MTY0NyAwLTQ0Ljg3NTI5NC0yMy40MzE1MjktMTE4LjE4MTY0Ny03OC43ODc3NjUtMTE4LjE4MTY0N3pNMTAyNCA1NjEuMjEyMjM1YzAgNjguMzY3MDU5LTYuNzQ2MzUzIDE0MC45NTA1ODgtMzcuNTI2NTg4IDIwMy43MTU3NjUtODEuMjU3NDEyIDE2NC4zMjE4ODItMzA0LjYwOTg4MiAxODAuMjg0MjM1LTQ2NC41OTQ4MjQgMTgwLjI4NDIzNS0xNjIuNDU0NTg4IDAtMzk5LjM2LTE0LjA5NTA1OS00ODMuNjg5NDEyLTE4MC4yODQyMzUtMzEuNDQyODI0LTYyLjE2MjgyNC0zOC4xODkxNzYtMTM1LjM0ODcwNi0zOC4xODkxNzYtMjAzLjcxNTc2NSAwLTg5Ljg3MTA1OSAyNC42MzYyMzUtMTc0Ljc0MjU4OCA4My43MjcwNTktMjQzLjY1MTc2NS0xMS4wODMyOTQtMzMuODUyMjM1LTE2LjYyNDk0MS02OS41NzE3NjUtMTYuNjI0OTQxLTEwNC42ODg5NDEgMC00Ni4xNDAyMzUgMTAuNDIwNzA2LTkyLjIyMDIzNSAzMS4zODI1ODgtMTM0LjE0NCA5Ny4yMTk3NjUgMCAxNTkuMzgyNTg4IDQyLjQ2NTg4MiAyMzMuMjMxMDU5IDEwMC4yOTE3NjUgNjIuMTYyODI0LTE0Ljc1NzY0NyAxMjYuMTMyNzA2LTIxLjUwNCAxOTAuMTYyODI0LTIxLjUwNCA1Ny44MjU4ODIgMCAxMTYuMzE0MzUzIDYuMjA0MjM1IDE3Mi4zMzMxNzYgMTkuNjk2OTQxIDczLjI0NjExOC01Ny4yMjM1MjkgMTM1LjM0ODcwNi05OC40ODQ3MDYgMjMxLjM2Mzc2NS05OC40ODQ3MDYgMjAuOTYxODgyIDQxLjg2MzUyOSAzMS4zODI1ODggODguMDAzNzY1IDMxLjM4MjU4OCAxMzQuMTQ0IDAgMzUuMTE3MTc2LTUuNTQxNjQ3IDcwLjE3NDExOC0xNi42MjQ5NDEgMTAzLjQyNCA1OS4wOTA4MjQgNjkuNTExNTI5IDgzLjY2NjgyNCAxNTUuMDQ1NjQ3IDgzLjY2NjgyNCAyNDQuOTE2NzA2ek04ODYuMTIxNDEyIDY2OS41MTUyOTRjMC05NC4xNDc3NjUtNTcuMTYzMjk0LTE3Ny4yMTIyMzUtMTU3LjUxNTI5NC0xNzcuMjEyMjM1LTQwLjU5ODU4OCAwLTc5LjMyOTg4MiA3LjQwODk0MS0xMTkuOTg4NzA2IDEyLjk1MDU4OC0zMS45ODQ5NDEgNC45MzkyOTQtNjMuOTY5ODgyIDYuNzQ2MzUzLTk2LjYxNzQxMiA2Ljc0NjM1M3MtNjQuNjMyNDcxLTEuODA3MDU5LTk2LjYxNzQxMi02Ljc0NjM1M2MtMzkuOTk2MjM1LTUuNTQxNjQ3LTc5LjM5MDExOC0xMi45NTA1ODgtMTE5Ljk4ODcwNi0xMi45NTA1ODgtMTAwLjI5MTc2NSAwLTE1Ny41MTUyOTQgODMuMDY0NDcxLTE1Ny41MTUyOTQgMTc3LjIxMjIzNSAwIDE4OC4yOTU1MjkgMTcyLjI3Mjk0MSAyMTcuMjA4NDcxIDMyMi40Mzk1MjkgMjE3LjIwODQ3MWwxMDMuNDI0IDBjMTUwLjE2NjU4OCAwLjA2MDIzNSAzMjIuMzc5Mjk0LTI4LjkxMjk0MSAzMjIuMzc5Mjk0LTIxNy4yMDg0NzF6IiBwLWlkPSIxMTE2NyIgZmlsbD0iIzEyOTZkYiI+PC9wYXRoPjwvc3ZnPg==");
        background-size: 100%;
    }
}
</style>

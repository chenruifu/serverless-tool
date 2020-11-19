<template>
    <div class="layout-default">
        <header class="header">
            <div class="header-wrap">
                <nuxt-link :to="{name: 'index'}" class="header-wrap__logo">在线工具</nuxt-link>
                <a-menu class="header-wrap__menu" v-model="current" mode="horizontal" theme="dark">
                    <a-sub-menu v-for="(item, index) in toolsMenu" :key="index">
                        <nuxt-link slot="title" :to="{name: item.link}">{{item.name}}</nuxt-link>
                        <a-menu-item v-for="child in item.children" :key="child.name">
                            <nuxt-link :to="{name: 'app-'+ child.link}">{{child.name}}</nuxt-link>
                        </a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu>
                        <span slot="title">其他</span>
                        <a-menu-item key="setting:1">圆周率查询</a-menu-item>
                    </a-sub-menu>
                </a-menu>
                <a href="https://github.com/chenruifu/serverless-tool" class="header-wrap__github" target="_blank"></a>
            </div>
        </header>
        <main class="main">
            <section class="main-left">
                <nuxt />
            </section>
            <section class="main-right" style="display:none;">
                <a href="https://s.click.taobao.com/CDbz5vu" target="_blank" rel="noopener noreferrer">
                    <img style="width: 100%" src="~assets/ad-img.jpg" alt="">
                </a>
            </section>
        </main>
    </div>
</template>
<script>
import {Menu} from 'ant-design-vue';
import tools from '@/common/tools'
export default {
    components: {
        aMenu: Menu,
        aMenuItem: Menu.Item,
        aMenuItemGroup: Menu.ItemGroup,
        aSubMenu: Menu.SubMenu
    },
    data() {
        return {
            toolsMenu: tools,
            current: ['agecalc'],
        }
    },
    created() {
        console.log(tools)
    }
}
</script>
<style lang="less" scoped>
.layout-default {
	padding: 80px 0 0;
}
// 顶部导航条
.header {
	position: fixed;
	top: 0;
	left: 0;
    width: 100%;
	background-color: #001529;
    z-index: 3;
    .header-wrap{
        position: relative;
        max-width: 1300px;
        min-width: 800px;
        height: 60px;
        margin: 0 auto;
        color: #fff;
        &__logo{
            float: left;
            width: 140px;
            height: 60px;
            font-size: 20px;
            line-height: 60px;
            padding-left: 40px;
            position: relative;
            color: #ff0000;
            &:before{
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                width: 30px;
                height: 30px;
                transform: translateY(-50%);
                background-color: #ff0000;
                background-image:url("~assets/logo.svg");
                background-size: 100% auto;
                background-repeat: no-repeat;
                background-position: center;
            }
        }
        &__menu{
            float: left;
            margin-left: 80px;
            height: 60px;
            /deep/&.ant-menu-horizontal{
                line-height: 60px;
                font-size: 16px;
            }
        }
        &__github{
            position: absolute;
            right: 15px;
            top: 15px;
            width: 30px;
            height: 30px;
            background-image:url("~assets/github.svg");
            background-size: 100%;
        }
    }
}
.main{
    position: relative;
    margin: 0 auto;
    max-width: 1300px;
    min-width: 800px;
    overflow: hidden;
    .main-left{
        float: left;
        width: 100%;
    }
    .main-right{
        float: right;
        width: 24%;
    }
}

</style>

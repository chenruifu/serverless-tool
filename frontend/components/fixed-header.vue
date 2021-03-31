<template>
    <header class="header">
        <div class="header-wrap">
            <nuxt-link :to="{name: 'index'}" class="header-wrap__logo">在线工具</nuxt-link>
            <a-menu class="header-wrap__menu" v-model="current" mode="horizontal">
                <a-menu-item v-for="item in toolsMenu" :key="item.link">
                    <nuxt-link :to="{name: item.link}">{{item.name}}</nuxt-link>
                </a-menu-item>
                <a-sub-menu>
                    <span slot="title">其他</span>
                    <a-menu-item key="report">
                        <nuxt-link :to="{name: 'other-report'}">进度报表</nuxt-link>
                    </a-menu-item>
                    <a-menu-item key="performance">
                        <nuxt-link :to="{name: 'other-performance'}">绩效奖金</nuxt-link>
                    </a-menu-item>
                </a-sub-menu>
                <a-menu-item>
                    <a href="https://github.com/chenruifu/serverless-tool/issues/new" target="_blank">Issues</a>
                </a-menu-item>
            </a-menu>
            <a href="https://github.com/chenruifu/serverless-tool" class="header-wrap__github" target="_blank"></a>
        </div>
    </header>
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
            current: [this.$nuxt.$route.name],
        }
    }
}
</script>
<style lang="less" scoped>
// 顶部导航条
.header {
	position: fixed;
	top: 0;
	left: 0;
    width: 100%;
    z-index: 3;
    .header-wrap{
        position: relative;
        max-width: 1300px;
        min-width: 800px;
        height: 60px;
        border-bottom: 1px solid #e8e8e8;
        margin: 0 auto;
        color: #333;
        &__logo{
            float: left;
            width: 140px;
            height: 60px;
            font-size: 20px;
            line-height: 60px;
            padding-left: 46px;
            position: relative;
            color: #f8cc00;
            &:before{
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                width: 36px;
                height: 36px;
                transform: translateY(-50%);
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
            a{
                color: rgba(0,0,0,.65)
            }
            /deep/ .ant-menu-item-selected a, /deep/ .ant-menu-item-active a{
                color: #f8cc00;
            }
            /deep/ .ant-menu-submenu, /deep/ .ant-menu-item{
                height: 60px;
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
</style>

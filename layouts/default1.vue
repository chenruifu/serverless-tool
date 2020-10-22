<template>
    <a-layout>
        <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%', 'max-width': '1100px' }">
            <div class="logo" />
            <a-menu
                theme="dark"
                mode="horizontal"
                :default-selected-keys="['2']"
                :style="{ lineHeight: '64px' }"
            >
                <a-menu-item key="1">
                nav 1
                </a-menu-item>
                <a-menu-item key="2">
                nav 2
                </a-menu-item>
                <a-menu-item key="3">
                nav 3
                </a-menu-item>
            </a-menu>
        </a-layout-header>
        <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
            
        </a-layout-content>
        <a-layout-footer :style="{ textAlign: 'center' }">
        Ant Design ©2018 Created by Ant UED
        </a-layout-footer>
    </a-layout>
</template>
<script>
import {Layout, Menu} from "ant-design-vue";
export default {
    components: {
        aLayout: Layout,
        aLayoutHeader: Layout.Header,
        aMenu: Menu,
        aMenuItem: Menu.Item,
        aMenuItemGroup: Menu.ItemGroup,
        aSubMenu: Menu.SubMenu
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
    height: 60px;
    width: 100%;
	background-color: #001528;
}
</style>

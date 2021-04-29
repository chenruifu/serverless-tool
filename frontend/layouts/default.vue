<template>
    <div class="layout-default">
        <fixed-header />
        <main class="main">
            <nuxt />
        </main>
        <footer class="footer">
            <a href="https://beian.miit.gov.cn/">闽ICP备15003716号-4</a>
        </footer>
    </div>
</template>
<script>
import fixedHeader from '@/components/fixed-header'
export default {
    components: {
        fixedHeader
    },
    data() {
        return {
        }
    }
}
</script>
<style lang="less" scoped>
.layout-default {
	padding: 80px 0 0;
}
.main{
    position: relative;
    margin: 0 auto;
    max-width: 1300px;
    min-width: 800px;
    min-height: 90vh;
    overflow: hidden;
}
.footer{
    background-color: #191919;
    padding: 20px 0;
    text-align: center;
    a{
        color: rgba(255, 255, 255, 0.4)
    }
}

</style>

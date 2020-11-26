<template>
    <div class="layout-column">
        <fixed-header />
        <main class="main">
            <section class="main-left">
                <nuxt />
            </section>
            <section class="main-right">
                <a href="https://s.click.taobao.com/CDbz5vu" target="_blank" rel="noopener noreferrer">
                    <img style="width: 100%" src="~assets/ad-img.jpg" alt="">
                </a>
            </section>
        </main>
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
.layout-column {
	padding: 80px 0 0;
}
.main{
    position: relative;
    margin: 0 auto;
    max-width: 1300px;
    min-width: 800px;
    overflow: hidden;
    .main-left{
        float: left;
        width: 74%;
    }
    .main-right{
        float: right;
        width: 24%;
    }
}

</style>

<template>
    <div class="layout-default">
        <fixed-header />
        <main class="main">
            <nuxt />
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
.layout-default {
	padding: 80px 0 0;
}
.main{
    position: relative;
    margin: 0 auto;
    max-width: 1300px;
    min-width: 800px;
    overflow: hidden;
}

</style>

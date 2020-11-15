<template>
    <div>
        <a-input size="large" v-model="total" placeholder="贷款总额" />
        <a-input size="large" v-model="month" placeholder="还款期数" />
        <a-input size="large" v-model="toMonth" placeholder="已还款期数" />
        <a-input size="large" v-model="fl" placeholder="费率" />
        <div>
            <p>月还本金：{{(total/month).toFixed(2)}}</p>
            <p>已还本金：{{((total/month)*toMonth).toFixed(2)}}</p>
            <p>未还本金：{{(total-(total/month)*toMonth).toFixed(2)}}</p>
            <p>提前还款手续费：{{((total-(total/month)*toMonth)*0.03).toFixed(2)}}</p>
        </div>
    </div>
</template>

<script>
import {Input, Row, Col} from 'ant-design-vue';
export default {
    components: {
        aInput: Input,
        aRow: Row,
        aCol: Col
	},
    data() {
        return {
            total: 100000,
            month: 36,
            fl: 0.49,
            toMonth: 15,

        }
    }
}
</script>

<style>
.abc{width: 220px;}
</style>
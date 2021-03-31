<template>
    <div>
        <div class="tip">计算公式：<b><span>1%</span><span>(125w ≥ x &gt; 77w)</span></b><b><span>3%</span><span>(x &gt; 125)</span></b></div>
        <div class="content">
            <a-slider :marks="marks" v-model="inputValue" :min="50" :max="300" :step="1" />
            <a-row class="result">
                <a-col :span="8">
                    <span class="tit">总额w</span>
                    <a-input-number size="large" v-model="inputValue" :min="50" :max="300" />
                </a-col>
                <a-col :span="8">
                    <span class="tit">人数</span>
                    <a-input-number size="large" v-model="inputNumber" :min="1" :max="15" />
                </a-col>
                <a-col :span="8">
                    <span class="tit">人均</span>
                    <p class="per">{{resultPre}}</p>
                </a-col>
            </a-row>
        </div>
    </div>
</template>

<script>
import {Input, InputNumber, Row, Col, Button, Slider} from 'ant-design-vue';
export default {
    components: {
        aInput: Input,
        aInputNumber: InputNumber,
        aRow: Row,
        aCol: Col,
        aSlider: Slider,
        aButton: Button
	},
    computed: {
        // 数据计算
        resultPre() {
            let val = parseFloat(this.inputValue),
                num = parseFloat(this.inputNumber),
                res = '';
            // val = val - val * 0.01;
            if(val > 0 && num > 0) {
                let max125 = val - 125 > 0 ? val - 125 : 0;
                let max77 = max125 > 0 ? (val - max125 - 77) : val - 77;
                max77 = max77 < 0 ? 0 : max77;
                let resTotal = (max125 * 0.03 + max77 * 0.01).toFixed(2);
                res = (resTotal*10000).toFixed(2) +'/'+ num +'='+ (resTotal*10000/num).toFixed(2);
            }
            return res;
        }
    },
    data() {
        return {
            inputValue: 100,
            inputNumber: 8,
            marks: {
                50: '50w',
                77: '77w',
                100: '100w',
                120: '120w',
                140: '140w',
                160: '160w',
                200: '200w',
                220: '220w',
                240: '240w',
                260: '260w',
                300: '300w'
            }
        }
    }
}
</script>

<style lang="less" scoped>
.tip{
    b{
        display: inline-block;
        background-color: #FFE985;
        margin-right: 20px;
    }
    span{
        padding-right: 10px;
        &:first-child{
            color: #a2472b;
        }
    }
}
.content{
    width: 880px;
    margin: 60px auto 0 ;
}
.result{
    width: 500px;
    margin: 100px auto 0;
    .ant-col{
        text-align: center;
    }
    .tit{
        display: block;
        
    }
    .per{
        color: #EA5455;
        font-size: 20px;
        line-height: 38px;
    }
}
</style>
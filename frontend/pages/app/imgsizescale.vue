<template>
    <div class="app">
        <div class="app-name">
            <h1>图片尺寸比例</h1>
            <p>{{appInfo.desc}}</p>
        </div>
        <a-row type="flex" justify="space-around" align="middle">
            <a-col :span="8" style="padding: 20px;">
                <div class="input-wrap">
                    <span class="input-wrap__label">长：</span>
                    <a-input v-model="inputWidth" class="input-wrap__input" :disabled="scaleNum != ''" size="large" @change="inputChange('inputWidth')" placeholder="输入图片长度" />
                </div>
                <div class="input-wrap">
                    <span class="input-wrap__label">宽：</span>
                    <a-input v-model="inputHeight" class="input-wrap__input" :disabled="scaleNum != ''" size="large" @change="inputChange('inputHeight')" placeholder="输入图片宽度" />
                </div>
            </a-col>
            <a-col :span="8">
                <div class="scale-btn">
                    <p v-if="scaleNum">图片长宽比：1:{{scaleNum}}</p>
                    <a-button type="primary" size="large" @click="confirm">确定</a-button>
                    <a-button size="large" @click="reset">重置</a-button>
                </div>
            </a-col>
            <a-col :span="8">
                <div class="input-wrap">
                    <span class="input-wrap__label">长：</span>
                    <a-input v-model="scaleWidth" class="input-wrap__input" size="large" @change="inputChange('scaleWidth')" :disabled="scaleNum == ''" placeholder="自动比例宽高" />
                </div>
                <div class="input-wrap">
                    <span class="input-wrap__label">宽：</span>
                    <a-input v-model="scaleHeight" class="input-wrap__input" size="large" @change="inputChange('scaleHeight')" :disabled="scaleNum == ''" placeholder="自动比例宽高" />
                </div>
            </a-col>
        </a-row>
        <div class="img-size">
            
        </div>
    </div>
</template>

<script>
import { getAppInfo } from '@/common/tools';
import { Input, Row, Col, Button, Icon} from 'ant-design-vue';
export default {
    components: {
        aInput: Input,
        aRow: Row,
        aCol: Col,
        aIcon: Icon,
        aButton: Button
	},
    data() {
        return {
            appInfo: getAppInfo('imgsizescale'),
            inputWidth: '',
            inputHeight: '',
            scaleWidth: '',
            scaleHeight: '',
            scaleNum: ''
        }
    },
    created() {

    },
    methods: {
        // 确定
        confirm() {
            this.scaleNum = parseFloat((this.inputHeight/this.inputWidth).toFixed(3));
        },
        // 重置
        reset() {
            this.scaleNum = '';
            this.scaleWidth = '';
            this.scaleHeight = '';
        },
        // 输入框修改
        inputChange(name) {
            let num = this[name];
            num = num.replace(/[^\d]/g, ''); // 清除“数字”和“.”以外的字符
            if (num.indexOf('.') < 0 && num != '') {
                // 以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
                num = parseInt(num);
            }
            this[name] = num;
            // 自动比例的添加计算
            if(['scaleWidth', 'scaleHeight'].indexOf(name) < 0) return;
            if(name == 'scaleWidth') {
                this.scaleHeight = parseInt(this.scaleWidth * this.scaleNum);
            }else{
                this.scaleWidth = parseInt(this.scaleHeight / this.scaleNum);
            }
        }
    }
}
</script>

<style lang="less" scoped>
.input-wrap{
    position: relative;
    padding-left: 30px;
    margin-bottom: 10px;
    &__label{
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
    } 
}
// 按钮
.scale-btn{
    text-align: center;
    p{
        color: #bb3d0b;
        margin-bottom: 10px;
    }
}
</style>
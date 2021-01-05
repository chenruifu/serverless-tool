<template>
    <div>
        <div class="report-progress">
            <div class="report-progress__title">{{timeYear}}年{{timeMonth}}月各业务部目标进度跟踪</div>
            <div class="report-progress__tag">
                <span class="target">月目标</span>
                <span class="complete">目标完成率</span>
                <span class="time">时间进度</span>
            </div>
            <div class="report-progress__data">
                <div class="report-percentage">
                    <span>0%</span>
                    <span>10%</span>
                    <span>20%</span>
                    <span>30%</span>
                    <span>40%</span>
                    <span>50%</span>
                    <span>60%</span>
                    <span>70%</span>
                    <span>80%</span>
                    <span>90%</span>
                    <span>100%</span>
                </div>
                <div class="report-timeline"><span :style="{left: timeProgress+'%'}"></span></div>
                <div class="report-itembox" v-for="(item, k) in mergeData" :key="k">
                    <span class="report-itembox__name">{{item.name}}</span>
                    <div class="report-itembox__progress">
                        <span :class="item.class" :style="{width: item.complete+'%'}">{{parseFloat(item.fulfill).toFixed(1)}}W&nbsp;/&nbsp;{{item.complete}}%</span>
                    </div>
                    <span class="report-itembox__target">{{item.target}}万</span>
                </div>
                <div class="report-total">
                    <div class="report-total__item report-total__item--blue"><p>总目标</p><b>{{totalData.total}}W</b></div>
                    <div class="report-total__item report-total__item--blue"><p>目标完成</p><b>{{parseFloat(totalData.fulfill).toFixed(1)}}W&nbsp;/&nbsp;{{parseFloat(totalData.complete).toFixed(1)}}%</b></div>
                    <div class="report-total__item" :class="totalData.class"><p>完成进度</p><b>{{totalData.count}}%</b></div>
                </div>
            </div>
        </div>
        <div class="report-input">
            <a-row :gutter="12" type="flex" justify="center">
                <a-col :span="5" v-for="(item, k) in data" :key="k">
                    <span>{{item.name}}</span>
                    <a-input size="large" v-model="item.target" placeholder="目标值" />
                    <a-input size="large" v-model="item.fulfill" placeholder="当前完成值" />
                </a-col>
                <a-col :span="5">
                    <span>当前天数/月总天数</span>
                    <a-input size="large" v-model="timeDay" placeholder="当前天" />
                    <a-input size="large" v-model="timeDayTotal" placeholder="当月总天数" />
                </a-col>
                <a-col :span="5">
                    <span>年份/月份</span>
                    <a-input size="large" v-model="timeYear" placeholder="当前年份" />
                    <a-input size="large" v-model="timeMonth" placeholder="当前月份" />
                </a-col>
            </a-row>
            <div style="text-align: center">
                <a-button type="primary" size="large" @click="saveData">保存当前数据</a-button>
            </div>
        </div>
    </div>
</template>
<script>
import {Input, Row, Col, Button} from 'ant-design-vue';
export default {
	components: {
        aInput: Input,
        aRow: Row,
        aCol: Col,
        aButton: Button
	},
    computed: {
        // 数据计算
        mergeData() {
            let mData = this.data;
            for(let i = 0,max= mData.length; i<max; i++) {
                let thisComplete = (mData[i].fulfill / mData[i].target * 100).toFixed(2);
                let className = 'red';
                let classCount = thisComplete / this.timeProgress;
                if(classCount >= 0.9) {
                    className = 'green';
                }else if(classCount >= 0.8) {
                    className = 'yellow';
                }
                mData[i].complete = thisComplete;
                mData[i].class = className;
            }
            return mData;
        },
        // 合计数据
        totalData() {
            const mData = this.data;
            let returnData = {
                total: 0,
                fulfill: 0
            };
            for(let i = 0,max= mData.length; i<max; i++) {
                returnData.total += parseFloat(mData[i].target);
                returnData.fulfill += parseFloat(mData[i].fulfill);
            }
            let thisComplete = (returnData.fulfill / returnData.total * 100).toFixed(2);
            let className = 'red';
            let classCount = thisComplete / this.timeProgress;
            console.log(thisComplete, this.timeProgress);
            if(classCount >= 0.9) {
                className = 'green';
            }else if(classCount >= 0.8) {
                className = 'yellow';
            }
            returnData.complete = thisComplete;
            returnData.class = className;
            returnData.total = returnData.total.toFixed(2);
            returnData.fulfill = returnData.fulfill.toFixed(2);
            returnData.count = (classCount * 100).toFixed(2);
            return returnData;
        },
        // 时间进度
        timeProgress() {
            return parseFloat(this.timeDay/this.timeDayTotal*100).toFixed(2)
        }
    },
	data() {
		return {
            timeDay: 3,
            timeDayTotal: 30,
            timeYear: 2020,
            timeMonth: 11,
            data: [{
                name: '咨询服务',
                target: 133,
                fulfill: 27.38,
            },{
                name: '电商',
                target: 133,
                fulfill: 27.38,
            }, {
                name: '网站部',
                target: 90,
                fulfill: 36.28,
            }, {
                name: '商务',
                target: 20,
                fulfill: 6.65,
            }, {
                name: '自媒体',
                target: 9,
                fulfill: 3.6,
            }, {
                name: '国艺-知识付费',
                target: 20,
                fulfill: 3.71,
            }, {
                name: '国艺-招生',
                target: 10,
                fulfill: 0.78,
            }]
		};
	},
    mounted() {
        let loaclData = localStorage.getItem('businessData');
        let businessData = JSON.parse(loaclData) || {};
        if(businessData.timeDay) this.timeDay = businessData.timeDay;
        if(businessData.timeDayTotal) this.timeDayTotal = businessData.timeDayTotal;
        if(businessData.timeYear) this.timeYear = businessData.timeYear;
        if(businessData.timeMonth) this.timeMonth = businessData.timeMonth;
        if(businessData.data) this.data = businessData.data;
    },
    methods: {
        // 本地存储
        saveData() {
            let data = {
                timeDay: this.timeDay,
                timeDayTotal: this.timeDayTotal,
                timeYear: this.timeYear,
                timeMonth: this.timeMonth,
                data: this.data
            }
            localStorage.setItem('businessData', JSON.stringify(data));
            alert('保存成功');
        }
    }
};
</script>
<style lang="less">

.report-progress{
    margin: 80px auto;
    width: 880px;
    &__title{
        text-align: center;
        font-size: 28px;
        color: #096dd9
    }
    &__tag{
        margin-top: 10px;
        text-align: center;
        span{
            font-size: 15px;
            display: inline-block;
            padding-left: 14px;
            position: relative;
            margin:0 20px;
            color: #096dd9;
            &::after{
                content: '';
                position: absolute;
                left: 0;
            }
            &.target::after{
                width: 10px;
                height: 10px;
                top: 50%;
                transform: translateY(-50%);
                background-color: #D5E3FF;
            }
            &.complete::after{
                width: 10px;
                height: 10px;
                top: 50%;
                transform: translateY(-50%);
                background-color: #FE684A;
            }
            &.time::after{
                height: 10px;
                left: 5px;
                top: 50%;
                transform: translateY(-50%);
                border-left: 1px dashed #096dd9
            }
            
        }
    }
    &__data{
        margin: 30px 0 0 200px;
        padding: 30px 60px 0 140px;
        position: relative;
        &:after{
            content: '';
            position: absolute;
            left: 139px;
            top: 30px;
            height: calc(100% - 30px);
            width: 1px;
            background-color: #f0f0f0;
        }
    }
}
// 进度线
.report-percentage{
    position: absolute;
    left: 140px;
    top: 0;
    color: #096dd9;
    width: calc(100% - 200px);
    span{
        position: absolute;
        width: 60px;
        top: 0;
        font-size: 15px;
        margin-left: -30px;
        text-align: center;
        .for-loop(11);
    }
}
// 左侧汇总数据
.report-total{
    position: absolute;
    left: -200px;
    top: 0;
    width: 180px;
    padding: 10px 0;
    box-sizing: border-box;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    &__item{
        position: relative;
        padding: 10px;
        text-align: center;
        background-color: #28C76F;
        color: #fff;
        font-size: 14px;
        &--blue{
            background: linear-gradient(45deg, #5EFCE8, #736EFE)
        }
        &.yellow{
            background: linear-gradient(45deg, #FFE985, #e8cf19)
        }
        &.green{
            background: linear-gradient(45deg, #81FBB8, #28C76F)
        }
        &.red{
            background: linear-gradient(45deg, #FEB692, #EA5455)
        }
        p{margin-bottom: 0;font-size: 1.2em;}
        b{
            font-weight: normal;
            font-size: 1.6em;
        }
    }

}
// 数据
.report-itembox{
    position: relative;
    padding: 10px 0;
    &__name{
        position: absolute;
        left: -140px;
        top: 50%;
        transform: translateY(-50%);
        text-align: right;
        width: 130px;
        font-size: 16px;
        color: #096dd9;
    }
    &__target{
        position: absolute;
        right: -140px;
        top: 50%;
        transform: translateY(-50%);
        width: 130px;
        color: #FE684A;
    }
    &__progress{
        position: relative;
        height: 28px;
        border-radius: 14px;
        background-color: #e0e8f9;
        span{
            position: absolute;
            left:0;
            line-height: 28px;
            color: #fff;
            background-color: #FE684A;
            text-align: right;
            box-sizing: border-box;
            height: 100%;
            border-radius: 14px;
            padding-right: 14px;
            font-size: 12px;
            max-width: 100%;
            &.yellow{
                background: linear-gradient(to right, #FFE985, #e8cf19)
            }
            &.green{
                background: linear-gradient(to right, #81FBB8, #28C76F)
            }
            &.red{
                background: linear-gradient(to right, #FEB692, #EA5455)
            }
        }
    }
}
// 时间进度条
.report-timeline{
    position: absolute;
    left: 140px;
    right: 60px;
    top: 30px;
    bottom: 0;
    z-index: 2;
    span{
        position: absolute;
        width: 0;
        left: 10%;
        border: 1px dashed #096dd9;
        height: 100%;
    }
}
.report-input{
    width: 800px;
    margin: 30px auto;
    /deep/ .ant-col{
        margin-bottom: 20px;
    }
    /deep/ .ant-input{
        margin-bottom: 10px;
    }
}

// 位置循环
.for-loop(@index) when (@index > 0) {
  &:nth-of-type(@{index}) {
      left: (10% * (@index - 1));
  }
  .for-loop(@index - 1);
}
</style>

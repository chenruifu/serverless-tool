<template>
    <div>
        <div class="report-progress">
            <div class="report-progress__title">2020年10月各业务部目标进度跟踪(单位：万元)</div>
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
                        <span :class="item.class" :style="{width: item.complete+'%'}">{{item.complete}}%</span>
                    </div>
                    <span class="report-itembox__target">{{item.target}}万</span>
                </div>
            </div>
        </div>
        <div class="report-input">
            <a-row :gutter="12">
                <a-col :span="8" v-for="(item, k) in data" :key="k">
                    <span>{{item.name}}</span>
                    <a-input size="large" v-model="item.target" placeholder="目标值" />
                    <a-input size="large" v-model="item.fulfill" placeholder="当前完成值" />
                </a-col>
            </a-row>
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
    computed: {
        mergeData() {
            let mData = this.data;
            for(let i = 0,max= mData.length; i<max; i++) {
                let thisComplete = (mData[i].fulfill / mData[i].target * 100).toFixed(2);
                let className = 'red';
                let classCount = thisComplete / this.timeProgress;
                if(classCount >= 0.95) {
                    className = 'green';
                }else if(classCount >= 0.8) {
                    className = 'yellow';
                }
                mData[i].complete = thisComplete;
                mData[i].class = className;
            }
            return mData;
        }
    },
	data() {
        let thisDay = new Date().getDate() - 1;
        let days = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
		return {
            timeProgress: parseInt(thisDay/days*100),
            data: [{
                name: '销售部',
                target: 120,
                fulfill: 89,
            }, {
                name: '网站部',
                target: 80,
                fulfill: 10,
            }, {
                name: '商务',
                target: 100,
                fulfill: 13.18,
            }, {
                name: '自媒体',
                target: 40,
                fulfill: 8,
            }, {
                name: '国艺部-线上+线下',
                target: 60,
                fulfill: 30,
            }, {
                name: '国艺部-商城',
                target: 60,
                fulfill: 20,
            }]
		};
	},
};
</script>
<style lang="less">

.report-progress{
    margin: 80px auto;
    width: 860px;
    &__title{
        text-align: center;
        font-size: 28px;
        color: #1890ff
    }
    &__tag{
        margin-top: 10px;
        text-align: center;
        span{
            font-size: 12px;
            display: inline-block;
            padding-left: 14px;
            position: relative;
            margin:0 20px;
            color: #339bfb;
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
                border-left: 1px dashed #339bfb
            }
            
        }
    }
    &__data{
        margin-top: 30px;
        padding: 30px 130px 0;
        position: relative;
        &:after{
            content: '';
            position: absolute;
            left: 129px;
            top: 30px;
            height: 100%;
            width: 1px;
            background-color: #f0f0f0;
        }
    }
}
// 进度线
.report-percentage{
    position: absolute;
    left: 130px;
    top: 0;
    color: #339bfb;
    width: calc(100% - 260px);
    span{
        position: absolute;
        width: 60px;
        top: 0;
        font-size: 13px;
        margin-left: -30px;
        text-align: center;
        .for-loop(11);
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
        font-size: 14px;
        color: #339bfb;
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
        background-color: #D5E3FF;
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
            font-size: 14px;
            max-width: 100%;
            &.yellow{
                background: linear-gradient(to right, #FFE985, #FA742B)
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
    left: 130px;
    right: 130px;
    top: 30px;
    bottom: 0;
    z-index: 2;
    span{
        position: absolute;
        width: 0;
        left: 10%;
        border: 1px dashed #339bfb;
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

(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{557:function(t,e,r){var content=r(600);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("0b08930a",content,!0,{sourceMap:!1})},599:function(t,e,r){"use strict";var o=r(557);r.n(o).a},600:function(t,e,r){(e=r(32)(!1)).push([t.i,'.report-progress{margin:80px auto;width:880px}.report-progress__title{text-align:center;font-size:28px;color:#096dd9}.report-progress__tag{margin-top:10px;text-align:center}.report-progress__tag span{font-size:15px;display:inline-block;padding-left:14px;position:relative;margin:0 20px;color:#096dd9}.report-progress__tag span:after{content:"";position:absolute;left:0}.report-progress__tag span.target:after{width:10px;height:10px;top:50%;transform:translateY(-50%);background-color:#d5e3ff}.report-progress__tag span.complete:after{width:10px;height:10px;top:50%;transform:translateY(-50%);background-color:#fe684a}.report-progress__tag span.time:after{height:10px;left:5px;top:50%;transform:translateY(-50%);border-left:1px dashed #096dd9}.report-progress__data{margin:30px 0 0 200px;padding:30px 60px 0 140px;position:relative}.report-progress__data:after{content:"";position:absolute;left:139px;top:30px;height:calc(100% - 30px);width:1px;background-color:#f0f0f0}.report-percentage{position:absolute;left:140px;top:0;color:#096dd9;width:calc(100% - 200px)}.report-percentage span{position:absolute;width:60px;top:0;font-size:15px;margin-left:-30px;text-align:center}.report-percentage span:nth-of-type(11){left:100%}.report-percentage span:nth-of-type(10){left:90%}.report-percentage span:nth-of-type(9){left:80%}.report-percentage span:nth-of-type(8){left:70%}.report-percentage span:nth-of-type(7){left:60%}.report-percentage span:nth-of-type(6){left:50%}.report-percentage span:nth-of-type(5){left:40%}.report-percentage span:nth-of-type(4){left:30%}.report-percentage span:nth-of-type(3){left:20%}.report-percentage span:nth-of-type(2){left:10%}.report-percentage span:first-of-type{left:0}.report-total{position:absolute;left:-200px;top:0;width:180px;padding:10px 0;box-sizing:border-box;height:100%;display:flex;justify-content:space-between;flex-direction:column}.report-total__item{position:relative;padding:10px;text-align:center;background-color:#28c76f;color:#fff;font-size:14px}.report-total__item--blue{background:linear-gradient(45deg,#5efce8,#736efe)}.report-total__item.yellow{background:linear-gradient(45deg,#ffe985,#e8cf19)}.report-total__item.green{background:linear-gradient(45deg,#81fbb8,#28c76f)}.report-total__item.red{background:linear-gradient(45deg,#feb692,#ea5455)}.report-total__item p{margin-bottom:0;font-size:1.2em}.report-total__item b{font-weight:400;font-size:1.6em}.report-itembox{position:relative;padding:10px 0}.report-itembox__name{left:-140px;text-align:right;font-size:16px;color:#096dd9}.report-itembox__name,.report-itembox__target{position:absolute;top:50%;transform:translateY(-50%);width:130px}.report-itembox__target{right:-140px;color:#fe684a}.report-itembox__progress{position:relative;height:28px;border-radius:14px;background-color:#e0e8f9}.report-itembox__progress span{position:absolute;left:0;line-height:28px;color:#fff;background-color:#fe684a;text-align:right;box-sizing:border-box;height:100%;border-radius:14px;padding-right:14px;font-size:12px;max-width:100%}.report-itembox__progress span.yellow{background:linear-gradient(90deg,#ffe985,#e8cf19)}.report-itembox__progress span.green{background:linear-gradient(90deg,#81fbb8,#28c76f)}.report-itembox__progress span.red{background:linear-gradient(90deg,#feb692,#ea5455)}.report-timeline{position:absolute;left:140px;right:60px;top:30px;bottom:0;z-index:2}.report-timeline span{position:absolute;width:0;left:10%;border:1px dashed #096dd9;height:100%}.report-input{width:800px;margin:30px auto}.report-input /deep/ .ant-col{margin-bottom:20px}.report-input /deep/ .ant-input{margin-bottom:10px}',""]),t.exports=e},605:function(t,e,r){"use strict";r.r(e);r(555);var o=r(558),col=(r(559),r(568)),l=(r(561),r(567)),n=(r(562),{components:{aInput:r(566).a,aRow:l.a,aCol:col.a,aButton:o.a},computed:{mergeData:function(){for(var t=this.data,i=0,e=t.length;i<e;i++){var r=(t[i].fulfill/t[i].target*100).toFixed(2),o="red",l=r/this.timeProgress;l>=.9?o="green":l>=.8&&(o="yellow"),t[i].complete=r,t[i].class=o}return t},totalData:function(){for(var t=this.data,e={total:0,fulfill:0},i=0,r=t.length;i<r;i++)e.total+=parseFloat(t[i].target),e.fulfill+=parseFloat(t[i].fulfill);var o=(e.fulfill/e.total*100).toFixed(2),l="red",n=o/this.timeProgress;return console.log(o,this.timeProgress),n>=.9?l="green":n>=.8&&(l="yellow"),e.complete=o,e.class=l,e.total=e.total.toFixed(2),e.fulfill=e.fulfill.toFixed(2),e.count=(100*n).toFixed(2),e},timeProgress:function(){return parseFloat(this.timeDay/this.timeDayTotal*100).toFixed(2)}},data:function(){return{timeDay:3,timeDayTotal:30,timeYear:2020,timeMonth:11,data:[{name:"销售部",target:133,fulfill:27.38},{name:"网站部",target:90,fulfill:36.28},{name:"商务",target:20,fulfill:6.65},{name:"自媒体",target:9,fulfill:3.6},{name:"国艺-知识付费",target:20,fulfill:3.71},{name:"国艺-招生",target:10,fulfill:.78}]}},mounted:function(){var t=localStorage.getItem("businessData"),e=JSON.parse(t);e.timeDay&&(this.timeDay=e.timeDay),e.timeDayTotal&&(this.timeDayTotal=e.timeDayTotal),e.timeYear&&(this.timeYear=e.timeYear),e.timeMonth&&(this.timeMonth=e.timeMonth),e.data&&(this.data=e.data)},methods:{saveData:function(){var data={timeDay:this.timeDay,timeDayTotal:this.timeDayTotal,timeYear:this.timeYear,timeMonth:this.timeMonth,data:this.data};localStorage.setItem("businessData",JSON.stringify(data)),alert("保存成功")}}}),c=(r(599),r(27)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"report-progress"},[r("div",{staticClass:"report-progress__title"},[t._v(t._s(t.timeYear)+"年"+t._s(t.timeMonth)+"月各业务部目标进度跟踪")]),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"report-progress__data"},[t._m(1),t._v(" "),r("div",{staticClass:"report-timeline"},[r("span",{style:{left:t.timeProgress+"%"}})]),t._v(" "),t._l(t.mergeData,(function(e,o){return r("div",{key:o,staticClass:"report-itembox"},[r("span",{staticClass:"report-itembox__name"},[t._v(t._s(e.name))]),t._v(" "),r("div",{staticClass:"report-itembox__progress"},[r("span",{class:e.class,style:{width:e.complete+"%"}},[t._v(t._s(parseFloat(e.fulfill).toFixed(1))+"W / "+t._s(e.complete)+"%")])]),t._v(" "),r("span",{staticClass:"report-itembox__target"},[t._v(t._s(e.target)+"万")])])})),t._v(" "),r("div",{staticClass:"report-total"},[r("div",{staticClass:"report-total__item report-total__item--blue"},[r("p",[t._v("总目标")]),r("b",[t._v(t._s(t.totalData.total)+"W")])]),t._v(" "),r("div",{staticClass:"report-total__item report-total__item--blue"},[r("p",[t._v("目标完成")]),r("b",[t._v(t._s(parseFloat(t.totalData.fulfill).toFixed(1))+"W / "+t._s(parseFloat(t.totalData.complete).toFixed(1))+"%")])]),t._v(" "),r("div",{staticClass:"report-total__item",class:t.totalData.class},[r("p",[t._v("完成进度")]),r("b",[t._v(t._s(t.totalData.count)+"%")])])])],2)]),t._v(" "),r("div",{staticClass:"report-input"},[r("a-row",{attrs:{gutter:12,type:"flex",justify:"center"}},[t._l(t.data,(function(e,o){return r("a-col",{key:o,attrs:{span:5}},[r("span",[t._v(t._s(e.name))]),t._v(" "),r("a-input",{attrs:{size:"large",placeholder:"目标值"},model:{value:e.target,callback:function(r){t.$set(e,"target",r)},expression:"item.target"}}),t._v(" "),r("a-input",{attrs:{size:"large",placeholder:"当前完成值"},model:{value:e.fulfill,callback:function(r){t.$set(e,"fulfill",r)},expression:"item.fulfill"}})],1)})),t._v(" "),r("a-col",{attrs:{span:5}},[r("span",[t._v("当前天数/月总天数")]),t._v(" "),r("a-input",{attrs:{size:"large",placeholder:"当前天"},model:{value:t.timeDay,callback:function(e){t.timeDay=e},expression:"timeDay"}}),t._v(" "),r("a-input",{attrs:{size:"large",placeholder:"当月总天数"},model:{value:t.timeDayTotal,callback:function(e){t.timeDayTotal=e},expression:"timeDayTotal"}})],1),t._v(" "),r("a-col",{attrs:{span:5}},[r("span",[t._v("年份/月份")]),t._v(" "),r("a-input",{attrs:{size:"large",placeholder:"当前年份"},model:{value:t.timeYear,callback:function(e){t.timeYear=e},expression:"timeYear"}}),t._v(" "),r("a-input",{attrs:{size:"large",placeholder:"当前月份"},model:{value:t.timeMonth,callback:function(e){t.timeMonth=e},expression:"timeMonth"}})],1)],2),t._v(" "),r("div",{staticStyle:{"text-align":"center"}},[r("a-button",{attrs:{type:"primary",size:"large"},on:{click:t.saveData}},[t._v("保存当前数据")])],1)],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"report-progress__tag"},[e("span",{staticClass:"target"},[this._v("月目标")]),this._v(" "),e("span",{staticClass:"complete"},[this._v("目标完成率")]),this._v(" "),e("span",{staticClass:"time"},[this._v("时间进度")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"report-percentage"},[r("span",[t._v("0%")]),t._v(" "),r("span",[t._v("10%")]),t._v(" "),r("span",[t._v("20%")]),t._v(" "),r("span",[t._v("30%")]),t._v(" "),r("span",[t._v("40%")]),t._v(" "),r("span",[t._v("50%")]),t._v(" "),r("span",[t._v("60%")]),t._v(" "),r("span",[t._v("70%")]),t._v(" "),r("span",[t._v("80%")]),t._v(" "),r("span",[t._v("90%")]),t._v(" "),r("span",[t._v("100%")])])}],!1,null,null,null);e.default=component.exports}}]);
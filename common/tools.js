// 列表数据
const appList = [{
    name: '开发工具',
    link: 'develop',
    children: [{
        name: '时间戳转换',
        link: 'timestamp',
        desc: '时间戳转换'
    }, {
        name: 'CSS尺寸转换',
        link: 'csstransform',
        desc: 'CSS尺寸转换，px2rem，px2rpx，rem2'
    }, {
        name: '时间转换',
        link: 'timetransform',
    }]
}, {
    name: '多媒体',
    link: 'media',
    children: [{
        name: '图片Base64编码',
        link: 'img2base64',
    }, {
        name: '图片尺寸比例',
        link: 'imgsizescale',
        desc: '根据设定的图片宽高，计算图片尺寸比例，可动态调整'
    }, {
        name: '视频截取图片',
        link: 'video2img',
    }]
}, {
    name: '生活查询',
    link: 'life',
    children: [{
        name: '年龄计算器',
        link: 'agecalc',
    }, {
        name: '生肖查询',
        link: 'shengxiao'
    }, {
        name: '星座查询',
        link: 'xingzuo',
    }]
}]
// 获取信息
const getAppInfo = (link) => {
    const listLen = appList.length;
    for(let i = 0; i < listLen; i++) {
        let thisChild = appList[i].children;
        let childLen = thisChild.length;
        if(childLen == 0) break;
        for(let c = 0; c < childLen; c++) {
            if(thisChild[c].link == link) {
                return thisChild[c];
            }
        }
    }
    return {};
}

export default appList;
export {
    appList as list,
    getAppInfo
};
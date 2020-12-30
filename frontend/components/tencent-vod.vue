<template>
    <div>
        <input type="file" ref="inputFile" />
        <div class="row" style="padding:10px;">
            <h4 @click="upload">上传视频</h4>
        </div>
        <div class="row" id="resultBox">
            <!-- 上传信息组件	 -->
            <div class="uploaderMsgBox" v-for="info in uploaderArr" :key="info.key">
                <div v-if="info.videoInfo">
                    视频名称：{{info.videoInfo.name + '.' + info.videoInfo.type}}；
                    上传进度：{{Math.floor(info.progress * 100) + '%'}}；
                    fileId：{{info.fileId}}；
                    上传结果：{{info.isVideoUploadCancel ? '已取消' : info.isVideoUploadSuccess ? '上传成功' : '上传中'}}；
                    <a href="javascript:void(0);" class="cancel-upload" v-if="!info.isVideoUploadSuccess && !info.isVideoUploadCancel" @click="info.cancel()">取消上传</a><br>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TcVod from 'vod-js-sdk-v6';
import axios from "axios";
export default {
    data() {
        return {
            tcVod: '',
            uploaderArr: []
        }
    },
    created: function () {
        let that = this;
        axios.get('https://toolapi.chenrf.com/get-tcsign').then(function(res) {
            console.log(res.data);
            that.tcVod = new TcVod({
                getSignature: () => res.data.data
            });
        });
    },
    methods: {
        upload() {
            const mediaFile = this.$refs.inputFile.files[0];
            if(!mediaFile){
                alert('请选择上传的媒体文件');
                return;
            }
            console.log(this.tcVod);
            const uploader = this.tcVod.upload({
                mediaFile: mediaFile,
            })
            // 上传信息对象
            let uploaderInfo = {
                key: new Date().getTime(),
                videoInfo: uploader.videoInfo,
                isVideoUploadSuccess: false,
                isVideoUploadCancel: false,
                progress: 0,
                fileId: '',
                videoUrl: '',
                cancel: function () {
                    uploaderInfo.isVideoUploadCancel = true;
                    uploader.cancel()
                },
            }
            // 进度
            uploader.on('media_progress', function(info) {
                uploaderInfo.progress = info.percent;
            })
            // 上传完成
            uploader.done().then(function (doneResult) {
                uploaderInfo.isVideoUploadSuccess = true;
                uploaderInfo.fileId = doneResult.fileId;
            })

            this.uploaderArr.push(uploaderInfo)
        },
        vExampleUpload: function () {
            var self = this;
            var mediaFile = this.$refs.vExampleFile.files[0]

            const uploader = this.tcVod.upload({
                mediaFile: mediaFile,
            })

            var uploaderInfo = {
                videoInfo: uploader.videoInfo,
                isVideoUploadSuccess: false,
                isVideoUploadCancel: false,
                progress: 0,
                fileId: '',
                videoUrl: '',
                cancel: function () {
                    uploaderInfo.isVideoUploadCancel = true;
                    uploader.cancel()
                },
            }
            // 进度
            uploader.on('media_progress', function (info) {
                uploaderInfo.progress = info.percent;
            })
            uploader.on('media_upload', function (info) {
                uploaderInfo.isVideoUploadSuccess = true;
            })

            

            this.uploaderInfos.push(uploaderInfo)

            uploader.done().then(function (doneResult) {
                console.log('doneResult', doneResult)

                uploaderInfo.fileId = doneResult.fileId;

                // return getAntiLeechUrl(doneResult.video.url);
            }).then(function (videoUrl) {
                uploaderInfo.videoUrl = videoUrl
                self.$refs.vExample.reset();
            })
        },
    }
}
</script>

<style scoped>

</style>

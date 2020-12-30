<template>
    <div>
        <input type="file" ref="vExampleFile" @change="fileChange" />
        <div class="row" style="padding:10px;">
            <h4 @click="upload">上传视频</h4>
        </div>
        <div class="row" id="resultBox">
            <!-- 上传信息组件	 -->
            <div class="uploaderMsgBox" v-for="uploaderInfo in uploaderInfos" :key="uploaderInfo.fileId">
                <div v-if="uploaderInfo.videoInfo">
                    视频名称：{{uploaderInfo.videoInfo.name + '.' + uploaderInfo.videoInfo.type}}；
                    上传进度：{{Math.floor(uploaderInfo.progress * 100) + '%'}}；
                    fileId：{{uploaderInfo.fileId}}；
                    上传结果：{{uploaderInfo.isVideoUploadCancel ? '已取消' : uploaderInfo.isVideoUploadSuccess ? '上传成功' : '上传中'}}；
                    <br>
                    地址：{{uploaderInfo.videoUrl}}；
                    <a href="javascript:void(0);" class="cancel-upload" v-if="!uploaderInfo.isVideoUploadSuccess && !uploaderInfo.isVideoUploadCancel" @click="uploaderInfo.cancel()">取消上传</a><br>
                </div>

                <div v-if="uploaderInfo.coverInfo">
                    封面名称：{{uploaderInfo.coverInfo.name}}；
                    上传进度：{{Math.floor(uploaderInfo.coverProgress * 100) + '%'}}；
                    上传结果：{{uploaderInfo.isCoverUploadSuccess ? '上传成功' : '上传中'}}；
                    <br>
                    地址：{{uploaderInfo.coverUrl}}；
                    <br>
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
            signature: '',
        }
    },
    props: {
        options: {
            type: Object,
            default () {
                return {};
            },
        },
    },
    created: function () {
        let that = this;
        axios.get('https://toolapi.chenrf.com/get-tcsign').then(function(res) {
            that.signature = res.data;
            that.tcVod = new TcVod({
                getSignature: res.data
            });
        });
    },
    methods: {
        vExampleAdd: function () {
            this.$refs.vExampleFile.click()
        },
        /**
         * 上传视频过程
         **/
        vExampleUpload: function () {
            var self = this;
            var mediaFile = this.$refs.vExampleFile.files[0]

            var uploader = this.tcVod.upload({
                mediaFile: mediaFile,
            })
            uploader.on('media_progress', function (info) {
                uploaderInfo.progress = info.percent;
            })
            uploader.on('media_upload', function (info) {
                uploaderInfo.isVideoUploadSuccess = true;
            })

            console.log(uploader, 'uploader')

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

            this.uploaderInfos.push(uploaderInfo)

            uploader.done().then(function (doneResult) {
                console.log('doneResult', doneResult)

                uploaderInfo.fileId = doneResult.fileId;

                return getAntiLeechUrl(doneResult.video.url);
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

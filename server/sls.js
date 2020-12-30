const express = require('express');
const path = require("path")
const app = express();

// 载入env配置文件
// require('dotenv').config({ path: '../.env' });
require('dotenv').config();

// Routes
app.get(`/get-tcsign`, (req, res) => {
    const querystring = require("querystring");
    const crypto = require('crypto');
    
    // 确定 app 的云 API 密钥
    const secret_id = process.env.TENCENT_SECRET_ID;
    const secret_key = process.env.TENCENT_SECRET_KEY;
    
    // 确定签名的当前时间和失效时间
    let current = parseInt((new Date()).getTime() / 1000)
    let expired = current + 86400;  // 签名有效期：1天

    // 向参数列表填入参数
    let arg_list = {
        secretId: secret_id,
        currentTimeStamp: current,
        expireTime: expired,
        random: Math.round(Math.random() * Math.pow(2, 32))
    }

    // 计算签名
    let orignal = querystring.stringify(arg_list);
    let orignal_buffer = Buffer.from(orignal, "utf8");

    let hmac = crypto.createHmac("sha1", secret_key);
    let hmac_buffer = hmac.update(orignal_buffer).digest();

    let signature = Buffer.concat([hmac_buffer, orignal_buffer]).toString("base64");

    res.json({
        status: 1,
        data: signature
    });
});

// app.listen(3000);
module.exports = app;

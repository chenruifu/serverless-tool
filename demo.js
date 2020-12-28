const express = require('express');
const path = require('path');
const app = express();

// Routes
app.get(`/`, (req, res) => {
    var querystring = require("querystring");
    var crypto = require('crypto');

    // 确定 app 的云 API 密钥
    var secret_id = "AKIDkGUWCfn5FBtKVO7NyNWR5SXptgBPO8bo";
    var secret_key = "cz7yYt1u4wylJMhofttlOkskPTIrC8RW";

    // 确定签名的当前时间和失效时间
    var current = parseInt((new Date()).getTime() / 1000)
    var expired = current + 86400;  // 签名有效期：1天

    // 向参数列表填入参数
    var arg_list = {
        secretId: secret_id,
        currentTimeStamp: current,
        expireTime: expired,
        random: Math.round(Math.random() * Math.pow(2, 32))
    }

    // 计算签名
    var orignal = querystring.stringify(arg_list);
    var orignal_buffer = Buffer.from(orignal, "utf8");

    var hmac = crypto.createHmac("sha1", secret_key);
    var hmac_buffer = hmac.update(orignal_buffer).digest();

    var signature = Buffer.concat([hmac_buffer, orignal_buffer]).toString("base64");

    // console.log(signature);
    res.json({
        status: 1,
        data: signature
    });
});

app.listen(3000);

// module.exports = app;

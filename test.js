/**
 * Created by linyi on 16/8/8.
 */

import WXPayApi from './index';


var fs = require('fs')
    , path = require('path');


var mainConfig={
    APPID:"wx273fe72f2db863ed",
    MCHID:"1228845802",
    KEY:"9F2j8S28d3w0fk1f0fZa2SAfd9aQcaLh",
    APPSECRET:"a18dd1a01c4f16e2d0e3a3292eb0b9a1",
    CERT_FILE:path.resolve(__dirname, 'cert/apiclient_cert.pem'),
    CERT_KEY_FILE:path.resolve(__dirname, 'cert/apiclient_key.pem'),
    CA_FILE:path.resolve(__dirname, 'cert/rootca.pem'),
    TIMEOUT:3000
};



var data={
    attach:"test",
    body:"test",
    nonce_str:"1add1a30ac87aa2db72f57a2375d8fec",
    notify_url:"http://wxpay.weixin.qq.com/pub_v2/pay/notify.v2.php",
    out_trade_no:"123456781111111",
    total_fee:1,
    trade_type:"NATIVE"
};




WXPayApi.initialize(mainConfig);

//WXPayApi.unifiedorder(data).then((r)=>console.log(r.return_msg),(e)=>console.error(e));


data={out_trade_no:"123456781111111"};
//WXPayApi.orderquery(data).then((r)=>console.log(r.return_msg),(e)=>console.error(e));

//WXPayApi.closeorder(data).then((r)=>console.log(r.return_msg),(e)=>console.error(e));


//申请退款,需要证书
data={
    transaction_id:"",
    out_trade_no:"123456781111111",
    device_info:"test",
    out_refund_no:"123456781111111",
    total_fee:1,
    refund_fee:1,
    refund_fee_type:'CNY',
    op_user_id:mainConfig.MCHID
};
//WXPayApi.refund(data).then((r)=>console.log(r.return_msg),(e)=>console.error(e));

//查询退款
data={
    transaction_id:"",
    out_trade_no:"123456781111111",
    device_info:"test",
    out_refund_no:"123456781111111",
    refund_id:"123456781111111"
};

WXPayApi.refundquery(data).then((r)=>console.log(r.return_msg),(e)=>console.error(e));
//request.post("https://api.mch.weixin.qq.com/pay/refundquery",{body:body},callback);
//
////下载对账单
////错误码有问题
//var url="https://api.mch.weixin.qq.com/pay/downloadbill";
//body=getSignXML({
//    appid:APPID,
//    mch_id:MCHID,
//    nonce_str:"1add1a30ac87aa2db72f57a2375d8fec",
//    device_info:"test",
//    bill_date:"20160808",
//    bill_type:"ALL"
//},KEY);
//
//request.post(url,{body:body},callback)



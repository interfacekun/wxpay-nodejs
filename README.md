# 微信支付Nodejs SDK
## 安装
```
npm install wxpay-nodejs --save
```
## 接口使用
1.接口配置
```javascript
import WXPayApi from 'wxpay-nodejs';

var mainConfig={
    APPID:"wx273fe72f2db863ed",//微信分配的公众账号ID（企业号corpid即为此appId）
    MCHID:"1228845802",//微信支付分配的商户号
    KEY:"9F2j8S28d3w0fk1f0fZa2SAfd9aQcaLh",
    APPSECRET:"a18dd1a01c4f16e2d0e3a3292eb0b9a1",
    CERT_FILE:path.resolve(__dirname, 'cert/apiclient_cert.pem'),
    CERT_KEY_FILE:path.resolve(__dirname, 'cert/apiclient_key.pem'),
    CA_FILE:path.resolve(__dirname, 'cert/rootca.pem'),
    TIMEOUT:3000
};

WXPayApi.initialize(mainConfig);
```

2.统一下单
```javascript
var data={
    attach:"test",
    body:"test",
    nonce_str:"1add1a30ac87aa2db72f57a2375d8fec",
    notify_url:"http://wxpay.weixin.qq.com/pub_v2/pay/notify.v2.php",
    out_trade_no:"123456781111111",
    total_fee:1,
    trade_type:"NATIVE"
};
WXPayApi.unifiedorder(data).then((r)=>console.log(r.return_msg),(e)=>console.error(e));
```
3.查询订单
```javascript
var data={out_trade_no:"123456781111111"};
WXPayApi.orderquery(data).then((r)=>console.log(r.return_msg),(e)=>console.error(e));
```
4.关闭订单
```javascript
var data={out_trade_no:"123456781111111"};
WXPayApi.closeorder(data).then((r)=>console.log(r.return_msg),(e)=>console.error(e));
```
5.退款
```javascriptjavascript
var data={
        transaction_id:"",
        out_trade_no:"123456781111111",
        device_info:"test",
        out_refund_no:"123456781111111",
        total_fee:1,
        refund_fee:1,
        refund_fee_type:'CNY',
        op_user_id:mainConfig.MCHID
    };
WXPayApi.refund(data).then((r)=>console.log(r.return_msg),(e)=>console.error(e));
```
6.查询退款
```javascript
var data={
        transaction_id:"",
        out_trade_no:"123456781111111",
        device_info:"test",
        out_refund_no:"123456781111111",
        refund_id:"123456781111111"
    };
WXPayApi.refundquery(data).then((r)=>console.log(r.return_msg),(e)=>console.error(e));
```

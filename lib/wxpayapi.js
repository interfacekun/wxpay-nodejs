/**
 * Created by linyi on 16/8/14.
 */
import request from 'request'
import {getSignXML,getSafeResult,genNonceStr} from './security'
import {Promise} from 'es6-promise'

var _config={
    APPID:"",
    MCHID:"",
    KEY:"",
    APPSECRET:"",
    CERT_FILE:"",
    CERT_KEY_FILE:"",
    CA_FILE:"",
    TIMEOUT:30000
};

var WXPayApi={
    initialize:(config)=>{_config=config}
};

WXPayApi.makeRequestBody=(data)=>{
    var temp=Object.assign({},data);
    temp.appid=_config.APPID;
    temp.mch_id=_config.MCHID;
    temp.nonce_str=genNonceStr();
    var body=getSignXML(temp,_config.KEY);
    console.log("request body:",body);
    return body;
};


WXPayApi.makeRequestPromise=(options)=>{
    var promise=new Promise((resolve,reject)=>{
        request.post(options,(error,response,body)=>{
            if(error){
                reject(error);
            }else{
                console.log("response body:",body);
                getSafeResult(body,_config.KEY).then((r)=>{
                    resolve(r);
                },(e)=>{
                    reject(e);
                });
            }
        });
    });
    return promise;
};


/**
 * 统一下单
 * @param data
 * @param timeout
 */
WXPayApi.unifiedorder=function(data,timeout){
    var options = {
        url: "https://api.mch.weixin.qq.com/pay/unifiedorder",
        body:this.makeRequestBody(data),
        timeout:timeout?timeout:_config.TIMEOUT
    };
    return this.makeRequestPromise(options);
}

/**
 * 查询订单
 * @param data
 * @param timeout
 */
WXPayApi.orderquery=function(data,timeout){
    var options = {
        url: "https://api.mch.weixin.qq.com/pay/orderquery",
        body:this.makeRequestBody(data),
        timeout:timeout?timeout:_config.TIMEOUT
    };
    return this.makeRequestPromise(options);
};

/**
 * 关闭订单
 * @param data
 * @param timeout
 */
WXPayApi.closeorder=function(data,timeout){
    var options = {
        url: "https://api.mch.weixin.qq.com/pay/closeorder",
        body:this.makeRequestBody(data),
        timeout:timeout?timeout:_config.TIMEOUT
    };
    return this.makeRequestPromise(options);
};

/**
 * 申请退款,需要证书
 * @param data
 * @param timeout
 */
WXPayApi.refund=function(data,timeout){
    var options = {
        url: "https://api.mch.weixin.qq.com/secapi/pay/refund",
        body:this.makeRequestBody(data),
        timeout:timeout?timeout:_config.TIMEOUT,
        cert: fs.readFileSync(_config.CERT_FILE),
        key: fs.readFileSync(_config.CERT_KEY_FILE),
        ca:fs.readFileSync(_config.CA_FILE),
        passphrase:_config.MCHID,
    };
    return this.makeRequestPromise(options);
};

/**
 * 查询退款
 * @param data
 * @param timeout
 */
WXPayApi.refundquery=function(data,timeout){
    var options = {
        url: "https://api.mch.weixin.qq.com/pay/refundquery",
        body:this.makeRequestBody(data),
        timeout:timeout?timeout:_config.TIMEOUT
    };
    return this.makeRequestPromise(options);
};


export default WXPayApi;
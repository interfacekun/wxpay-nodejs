/**
 * Created by linyi on 16/8/8.
 */
import md5 from 'md5'
import {parseString,Builder} from 'xml2js'
import uuid from 'uuid'
import {SUCCESS} from './constants'

/**
 * 参数签名并转成xml
 * @param params
 * @param key
 */
function getSignXML(params,key){
    params["sign"]=genSignature(params,key);
    var builder=new Builder({rootName:"xml"})
    return builder.buildObject(params);
}

/**
 * 参数签名
 * @param params json参数
 * @param key 密钥
 * @returns {string}
 */
function genSignature(params,key){
    var temp="";
    Object.keys(params).sort().forEach((v,i)=>{
        if(v!=='sign'&&params[v]){
            temp+=v+"="+params[v]+"&"
        }
    });
    var sign=md5(temp+"key="+key).toUpperCase();
    return sign;
}


function getSafeResult(xml,key){
    var promise=new Promise(function(resolve,reject){
        parseString(xml,{explicitArray:false},function(error,result){
            if(error){
                reject(error);
            }else{
                var resultJson = result.xml;
                if(resultJson.return_code==SUCCESS){
                    var sign=resultJson.sign;
                    if(sign!==genSignature(resultJson,key)){
                        reject("sign error:bad response");
                    }else{
                        resolve(resultJson);
                    }
                }else{
                    resolve(resultJson);
                }
            }
        });
    });
    return promise;
}

function genNonceStr(){
    return uuid.v4().replace(/\-/g,"");
}



module.exports={
    getSignXML,
    getSafeResult,
    genSignature,
    genNonceStr
};
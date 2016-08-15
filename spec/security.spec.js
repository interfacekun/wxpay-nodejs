/**
 * Created by linyi on 16/8/8.
 */

import {getSignXML,genSignature} from '../lib/security'

describe("security",()=>{
    it("sign",()=>{
        var data={
            appid:"wx426b3015555a46be",
            mch_id:"1225312702",
            attach:"test",
            body:"test",
            nonce_str:"1add1a30ac87aa2db72f57a2375d8fec",
            notify_url:"http://wxpay.weixin.qq.com/pub_v2/pay/notify.v2.php",
            out_trade_no:"123456781111111",
            total_fee:1,
            trade_type:"NATIVE"
        };

        expect(getSignXML(data,"e10adc3949ba59abbe56e057f20f883e").replace(/\s+/g, "")).toEqual("\
        <?xmlversion=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\
        <xml>\
            <appid>wx426b3015555a46be</appid>\
            <mch_id>1225312702</mch_id>\
            <attach>test</attach>\
            <body>test</body>\
            <nonce_str>1add1a30ac87aa2db72f57a2375d8fec</nonce_str>\
            <notify_url>http://wxpay.weixin.qq.com/pub_v2/pay/notify.v2.php</notify_url>\
            <out_trade_no>123456781111111</out_trade_no>\
            <total_fee>1</total_fee>\
            <trade_type>NATIVE</trade_type>\
            <sign>25EFBC883B34B300A3D71E70C18BAC10</sign>\
        </xml>\
        ".replace(/\s+/g, "") )
    })

    it("sign should ignore sign keyword of params",()=>{
        var dataWithSign={a:1,b:2,sign:3};
        var dataWithoutSign={a:1,b:2};
        var key="test";
        expect(genSignature(dataWithSign,key)).toEqual(genSignature(dataWithoutSign,key));
    })

    it("sign should ignore empty param",()=>{
        var data1={a:"",b:2};
        var data2={b:2};
        var key="test";
        expect(genSignature(data1,key)).toEqual(genSignature(data2,key));
    })

    var foo,bar=null;
    beforeEach(function(){
        foo={
            setBar:function(value){
                bar=value;
            }
        };
        spyOn(foo,"setBar");
    });

    it("track the spy has called ",()=>{
        foo.setBar(1);
        expect(foo.setBar).toHaveBeenCalledTimes(2);
    });


});
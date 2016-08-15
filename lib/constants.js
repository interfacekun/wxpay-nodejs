/**
 * Created by linyi on 16/8/8.
 */
import keyMirror from 'key-mirror'

export default keyMirror({
    FAIL:null,                  //  失败
    SUCCESS:null,               //  成功
    NOAUTH: null,               //	商户无此接口权限	商户未开通此接口权限	请商户前往申请此接口权限
    NOTENOUGH: null,            //	余额不足	用户帐号余额不足	用户帐号余额不足，请用户充值或更换支付卡后再支付
    ORDERPAID: null,            //	商户订单已支付	商户订单已支付，无需重复操作	商户订单已支付，无需更多操作
    ORDERCLOSED: null,          //	订单已关闭	当前订单已关闭，无法支付	当前订单已关闭，请重新下单
    SYSTEMERROR: null,          //	系统错误	系统超时	系统异常，请用相同参数重新调用
    APPID_NOT_EXIST: null,	    //  APPID 不存在	参数中缺少APPID	请检查APPID是否正确
    MCHID_NOT_EXIST: null,      //  MCHID 不存在	参数中缺少MCHID	请检查MCHID是否正确
    APPID_MCHID_NOT_MATCH: null,//	appid和mch_id不匹配	appid和mch_id不匹配	请确认appid和mch_id是否匹配
    LACK_PARAMS: null,          //	缺少参数	缺少必要的请求参数	请检查参数是否齐全
    OUT_TRADE_NO_USED: null,    //	商户订单号重复	同一笔交易不能多次提交	请核实商户订单号是否重复提交
    SIGNERROR: null,            //	签名错误	参数签名结果不正确	请检查签名参数和方法是否都符合签名算法要求
    XML_FORMAT_ERROR: null,     //	XML格式错误	XML格式错误	请检查XML参数格式是否正确
    REQUIRE_POST_METHOD: null,  //	请使用post方法	未使用post传递参数 	请检查请求参数是否通过post方法提交
    POST_DATA_EMPTY: null,      //	post数据为空	post数据不能为空	请检查post数据是否为空
    NOT_UTF8: null,             //	编码格式错误	未使用指定编码格式	请使用NOT_UTF8编码格式
    ORDERNOTEXIST:null,         //	此交易订单号不存在	查询系统中不存在此交易订单号	该API只能查提交支付交易返回成功的订单，请商户检查需要查询的订单号是否正确
    SYSTEMERROR:null,           //	系统错误	后台系统返回错误	系统异常，请再调用发起查询
    USER_ACCOUNT_ABNORMAL:null, //	退款请求失败	用户帐号异常或注销	此状态代表退款申请失败，商户可自行处理退款。
    INVALID_TRANSACTIONID:null,  //	无效transaction_id	请求参数未按指引进行填写	请求参数错误，检查原交易号是否存在或发起支付交易接口返回失败
    PARAM_ERROR:null,  //	参数错误	请求参数未按指引进行填写	请求参数错误，请重新检查再调用退款申请
});












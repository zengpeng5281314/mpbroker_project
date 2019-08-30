/**
 * Created by admin on 14-11-6.
 */
//var middleWebApi="http://api.51kahui.com/kahui3-api-web"

//var middleWebApi="http://42.96.185.240:8090/kahui3-api-web/";//中间页所用api
//var serverApiS="http://42.96.185.240:8090/kahui3-api-web/";//世纪难题分享页
//alert(window.location.host)

var serverApi="http://api.51kahui.com/kahui3-api-web/";//分享页,生产环境
var serverApi1="http://api.51kahui.com/kahui3-api-web/";//分享页,测试环境
var AD_API = "https://api.qianbaomm.com/qianbao-service-web";

//var AD_API = "http://12.0.0.200:7879/";
var QUS_CLICK="zd";
//var serverApi="http://i0.m3.51kahui.com:89/kahui3-api-web/"
function getHeader (){
	var url = window.location.href;
	var arr = window.location.href.split(":");
	return arr[0];
}
function GetRequest(name) {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest[name];
}
var fenQiData={
    "result": [{
        "bankId":1,
        "bankName":"工商银行",
        "installNum":[3,6,9,12,18,24],
        "installPercent":[1.65,3.60,5.4,7.2,11.7,15.6],
        "install3":1.65,
        "install6":3.60,
        "install9":5.4,
        "install12":7.2,
        "install18":11.7,
        "install24":15.6
    }, {
        "bankId":2,
        "bankName":"招商银行",
        "installNum":[3,6,9,12,18,24],
        "installPercent":[0.9,0.75,0.7,0.66,0.68,0.68],
        "install3":0.9,
        "install6":0.75,
        "install9":0.7,
        "install12":0.66,
        "install18":0.68,
        "install24":0.68
    },{
        "bankId":3,
        "bankName":"中国银行",
        "installNum":[3,6,9,12,18,24],
        "installPercent":[1.95,3.6,5.4,7.2,11.7,15],
        "install3":1.95,
        "install6":3.6,
        "install9":5.4,
        "install12":7.2,
        "install18":11.7,
        "install24":15
    },{
        "bankId":4,
        "bankName":"广发银行",
        "installNum":[12,18,24],
        "installPercent":[0.65,0.7,0.72],
        "install12":0.65,
        "install18":0.7,
        "install24":0.72
    },  {
        "bankId":5,
        "bankName":"交通银行",
        "installNum":[3,6,9,12,18,24],
        "installPercent":[0.72,0.72,0.72,0.72,0.72,0.72],
        "install3":0.72,
        "install6":0.72,
        "install9":0.72,
        "install12":0.72,
        "install18":0.72,
        "install24":0.72
    },{
        "bankId":6,
        "bankName":"华夏银行",
        "installNum":[3,6,9,12,15,18,21,24],
        "installPercent":[0.7,0.7,0.7,0.7,0.7,0.7,0.7,0.7],
        "install3":0.7,
        "install6":0.7,
        "install9":0.7,
        "install12":0.7,
        "install15":0.7,
        "install18":0.7,
        "install21":0.7,
        "install24":0.7
    },{
        "bankId":7,
        "bankName":"农业银行" ,
        "installNum":[3,6,9,12,18,24],
        "installPercent":[0.6,0.6,0.6,0.6,0.6,0.6],
        "install3":0.6,
        "install6":0.6,
        "install9":0.6,
        "install12":0.6,
        "install18":0.6,
        "install24":0.6
    },{
        "bankId":8,
        "bankName":"兴业银行",
        "installNum":[3,6,9,12,18,24],
        "installPercent":[2.4,3.9,7.8,11.7,11.7,15.6],
        "install3":2.4,
        "install6":3.9,
        "install9":7.8,
        "install12":11.7,
        "install18":11.7,
        "install24":15.6
    },{
        "bankId":9,
        "bankName":"建设银行",
        "installNum":[3,6,12,18,24],
        "installPercent":[2.6,4.2,7.2,11,15],
        "install3":2.6,
        "install6":4.2,
        "install12":7.2,
        "install18":11,
        "install24":15
    },{
        "bankId":10,
        "bankName":"浦发银行",
        "installNum":[6,12,15,18,24],
        "installPercent":[0.78,0.74,0.75,0.76,0.76],
        "install6":0.78,
        "install12":0.74,
        "install15":0.75,
        "install18":0.76,
        "install24":0.76
    }, {
        "bankId":11,
        "bankName":"民生银行",
        "installNum":[3,6,9,12,18,24],
        "installPercent":[0.82,0.7,0.67,0.67,0.7],
        "install3":0.82,
        "install6":0.7,
        "install9":0.67,
        "install12":0.67,
        "install18":0.67,
        "install24":0.7
    },{
        "bankId":12,
        "bankName":"北京银行",
        "installNum":[3,6,9,12,18,24],
        "installPercent":[1.8,3.6,5.4,7.2,11.7,15.6],
        "install3":1.8,
        "install6":3.6,
        "install9":5.4,
        "install12":7.2,
        "install18":11.7,
        "install24":15.6
    },{
        "bankId":13,
        "bankName":"光大银行",
        "installNum":[3,6,9,12],
        "installPercent":[2.5,3.8,5.5,8],
        "install3":2.5,
        "install6":3.8,
        "install9":5.5,
        "install12":8
    }, {
        "bankId":14,
        "bankName":"平安银行",
        "installNum":[2,3,4,5,6,7,8,9,10,11,12],
        "installPercent":[0.92,0.92,0.89,0.89,0.89,0.86,0.86,0.86,0.84,0.84,0.84],
        "install2":0.92,
        "install3":0.92,
        "install4":0.89,
        "install5":0.89,
        "install6":0.89,
        "install7":0.86,
        "install8":0.86,
        "install9":0.86,
        "install10":0.84,
        "install11":0.84,
        "install12":0.84
    },{
        "bankId":15,
        "bankName":"中信银行",
        "installNum":[3,6,9,12,18,24],
        "installPercent":[0.65,0.6,0.6,0.55,0.64,0.6],
        "install3":0.65,
        "install6":0.6,
        "install9":0.6,
        "install12":0.55,
        "install18":0.64,
        "install24":0.6
    }]
}
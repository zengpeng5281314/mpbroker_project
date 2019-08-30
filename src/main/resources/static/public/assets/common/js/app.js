  function isAndroid(){
    var u = navigator.userAgent;
    return u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
  }
  function isIOS(){
     var u = navigator.userAgent;
     //var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    //var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  }
  function bigIOS8(){
    if((navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i))) {
          // 判断系统版本号是否大于 9
        var ver = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);  
        ver = parseInt(ver[1], 10);
        if(ver >= 8){
          return true;
        }else{
          return false;
        }
      }else {
          return false;
      }
  }

  function tips(msg){
    if(isAndroid()){
      ryx.showToast(msg);
    }else if(isIOS()){
      if(bigIOS8()){
        setTimeout(function(){
          window.webkit.messageHandlers.showToast.postMessage(msg);
        },10);
      }else{
        setTimeout(function(){
          showToast(msg);
        },10);
      }
    }else{
      alert(msg);
    }
}
function useborrowing(){
    var u = navigator.userAgent;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios�ն�

    if(isiOS){
        window.webkit.messageHandlers.useBorrowing.postMessage({});
    }else{
        contact.useBorrowing();
    }
}

function goloseborrowings(){
    window.location.href=$('#path').attr('data-path')+"/api/borrowings/borrowingslist?channel=2&cardid="+$('#cardid').attr('cardid')+"&phone="+$('#phone').attr('data-phone');
}
$(function(){
  var path = $('#path').attr('data-path');
  cardid = $('#cardid').attr('cardid');
  phone = $('#phone').attr('data-phone');
    $.ajax({
        type: 'post',
        url: path+"/api/borrowings/getborrowings?channel=1&cardid="+cardid+'&phone='+phone,
        dataType: 'json',
        success: function(data){
            var data = data.result
            var result = ''
          if(!data || data.total == 0){
              $('.no-data').show()
              $(".dropload-load").remove()
           }
        else{
              for(var i = 0; i < data.total; i++){
                      result += '<div class="coupon-list">'
                      +'<div class="coupon-point">'
                        +'<div class="periods">'+data.borrowings[i].allottedTimeText+'</div>'
                        +'<div class="money-msg">'
                          +'<div class="big-size">'+data.borrowings[i].discount_text+'</div>'
                          if(data.borrowings[i].residueday){
                            result += '<div class="time-size">仅剩'+data.borrowings[i].residueday+'天</div>';

                             }
                          else if(data.borrowings[i].type == 2){
                            result += '<div class="time-size">待生效</div>';

                             }
                          
                    result +='</div></div>'
                      +'<div class="coupon-messaage">'
                          +'<div class="details">'
                            +'<div class="details-title">'+data.borrowings[i].typeword
                            if(data.borrowings[i].type != 2){
                              result += '<span class="use-msg" onclick="useborrowing()">立即使用</span>';
                               }
                              
                    result += '</div><div class="details-explain">'
                              +'<div>适用于：'+data.borrowings[i].borrowings_configs_name+'</div>'
                              +'<div>'+data.borrowings[i].dttime+'-'+data.borrowings[i].losetime+'</div>'
                              +'<div class="other-size">'+data.borrowings[i].description+'</div>'
                            +'</div></div></div></div>';
                  }
                $('.coupon-whole').append(result);

          }
        },
    });
});

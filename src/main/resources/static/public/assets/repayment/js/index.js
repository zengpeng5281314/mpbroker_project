function goloseborrowings() {
    window.location.href = $('#path').attr('data-path') + "/api/repayment/repaymentlist?channel=2&data=" + $('#data').attr('data-url');
}
$(function(){
  var path = $('#path').attr('data-path');
  var data = $('#data').attr('data-url');
    $.ajax({
        type: 'post',
        url: path+"/api/repayment/getrepaymentlist?channel=1&data=" + data,
        dataType: 'json',
        success: function(data){
            var data = data.result
            var result = ''
          if(data.count == 0){
              $('.no-data').show()
              $(".dropload-load").remove()
           }
        else{
              for(var i = 0; i < data.count; i++){
                      result += '<div class="coupon-list">'
                      +'<div class="coupon-point">'
                        +'<div class="money-msg">'
                          +'<div class="big-size">¥'+data.repaymentList[i].money+'</div><div class="time-size">满'+data.repaymentList[i].full_amt+'可用</div>'
                          if(data.repaymentList[i].residueday){
                            result += '<div class="time-size">仅剩'+data.repaymentList[i].residueday+'天</div>';

                             }
                          else if(data.repaymentList[i].type == 6){
                            result += '<div class="time-size">待生效</div>';

                             }
                          
                    result +='</div></div>'
                      +'<div class="coupon-messaage">'
                          +'<div class="details">'
                            +'<div class="details-title">'+data.repaymentList[i].account_name
                  var bankcountStr ='';
             /*     if(data.repaymentList[i].bankcount && data.repaymentList[i].bank.all == 0) {
                      bankcountStr = '<div>仅支持' + data.repaymentList[i].bankcount + '家银行</div>'
                  }*/
                              
                    result += '</div><div class="details-explain">'
                        +'<div class="other-size">'+data.repaymentList[i].remark+'</div>'
                        +'<div>'+data.repaymentList[i].dttime+'-'+data.repaymentList[i].losetime+'</div>'
                  +bankcountStr+
                            '</div></div></div></div>';
                  }

              $('.coupon-whole').append(result);

          }
        },
    });
});

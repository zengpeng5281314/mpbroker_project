$(function(){
    var counter = 0
    var pageStart = 0
    var pageEnd = 0;
    var num =10;
    var path = $('#path').attr('data-path');
    var data = $('#data').attr('data-url');
    // dropload
    $('.whole').dropload({
        scrollArea : window,
        domDown : {
          domClass   : 'dropload-down',
          domRefresh : '<div class="dropload-refresh">↑上拉加载更多</div>',
          domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中</div>',
          domNoData  : '<div class="dropload-noData">加载完成</div>'
      },
        loadDownFn : function(me){
            $.ajax({
                type: 'post',
                url: path+"/api/repayment/getrepaymentlist?channel=2&data=" + data,
                dataType: 'json',
                success: function(data){
                    var data = data.result
                    console.log(data)
                    var result = '';
                    counter++;
                    pageEnd = num * counter;
                    pageStart = pageEnd -  num;
                  if(data.repaymentList.length == 0){
                    $('.no-data').show()
                    $(".dropload-load").remove()
                }
                else{
                    for(var i = pageStart; i < pageEnd; i++){
                        result += '<div class="coupon-list other-background">'
                              +'<div class="coupon-point lose-point">' +
                            '<div class="money-msg">'
                                  +'<div class="big-size">¥'+data.repaymentList[i].money+'</div>'
                                 +'<div class="time-size">满'+data.repaymentList[i].full_amt+'可用</div>'
                                 +'<div class="time-size">'+data.repaymentList[i].typetext+'</div>'

                            +'</div>'
                              +'</div>'
                              +'<div class="coupon-messaage">'
                                  +'<div class="details">'
                                    +'<div class="details-title">'+data.repaymentList[i].account_name+'</div>'
                                    +'<div class="details-explain">'
                                      +'<div>'+data.repaymentList[i].remark+'</div>';

                                        result += '<div>'+data.repaymentList[i].dttime+' - '+data.repaymentList[i].losetime+'</div>';


                                        result +='</div></div></div></div>';

                        if((i + 1) >= data.repaymentList.length){
                            // 锁定
                            me.lock();
                            // 无数据
                            me.noData();
                              $(".dropload-down").hide()
                            break;
                        }
                    }
                    // 为了测试，延迟1秒加载
                    setTimeout(function(){
                        $('.coupon-whole').append(result);
                        // 每次数据加载完，必须重置
                        me.resetload();
                    },1000);
                  }
                },
                error: function(xhr, type){
                    // 即使加载出错，也得重置
                    $('.coupon-whole').append("<div class='fail-msg'>加载失败，请重试</div>");
                    $(".dropload-load").remove()
  
                    // me.resetload();
  
                }
            });
        }
    });
  });
$(function(){
    var counter = 0
    var pageStart = 0
    var pageEnd = 0;
    var num =10;
    var path = $('#path').attr('data-path');
    cardid = $('#cardid').attr('cardid');
    phone=$('#phone').attr('data-phone');
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
                url: path+'/borrowings/getborrowings?channel=2&cardid='+cardid+'&phone='+phone,
                dataType: 'json',
                success: function(data){
                    var data = data.result
                    console.log(data)
                    var result = '';
                    counter++;
                    pageEnd = num * counter;
                    pageStart = pageEnd -  num;
                  if(data.borrowings.length == 0){
                    $('.no-data').show()
                    $(".dropload-load").remove()
                }
                else{
                    for(var i = pageStart; i < pageEnd; i++){
                        result += '<div class="coupon-list other-background">'
                              +'<div class="coupon-point lose-point">'
                                +'<div class="verb">'+data.borrowings[i].allottedTimeText+'可用</div>'
                                +'<div class="money-msg">'
                                  +'<div class="big-size">'+data.borrowings[i].discount_text+'</div>'
                                +'</div>'
                              +'</div>'
                              +'<div class="coupon-messaage">'
                                  +'<div class="details">'
                                    +'<div class="details-title">'+data.borrowings[i].typeword+'</div>'
                                    +'<div class="details-explain">'
                                      +'<div>适用于：'+data.borrowings[i].borrowings_configs_name+'</div>';
                                        if(data.borrowings[i].type == 4){
                                       result += '<div>'+data.borrowings[i].losetime+'<span class="overdue">已过期</span></div>';

                                        }
                                        else if(data.borrowings[i].type == 3){
                                            result += '<div>'+data.borrowings[i].usedtime+'<span class="overdue">已使用</span></div>';

                                        }
                                        result +='<div class="other-size">'+data.borrowings[i].description+'</div>'
                                    +'</div></div></div></div>';

                        if((i + 1) >= data.borrowings.length){
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
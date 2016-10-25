$(function() {



  //返回顶部
  var timer_toTop=null;
  var timer_toContent=null;
  var timer_toContent2=null;

  $("#toTop").click(function() {
    timer_toTop=setInterval(function() {
      if (document.body.scrollTop>0) {/*Chrome*/
        document.body.scrollTop-=90;
      }else if(document.documentElement.scrollTop>0) {/*Firefox*/
        document.documentElement.scrollTop-=90;
      }else{
        clearInterval(timer_toTop);
      }
    },10);
  });

  $.ajax({
    url: '/blog/db/db.json',
    type: 'GET',
    dataType: 'json',
    success: function(rsp) {
      console.log(rsp)
    }
  })

  

});

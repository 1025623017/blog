$(function() {

  //返回顶部
  var timer_toTop=null;

  $("#toTop").click(function() {
    timer_toTop=setInterval(function() {
      if(document.body.scrollTop>0) {/*Chrome*/
        document.body.scrollTop-=60;
      }else if(document.documentElement.scrollTop>0) {/*Firefox*/
        document.documentElement.scrollTop-=60;
      }else{
        clearInterval(timer_toTop);
      }
    },10);
  });

  //导航条响应
  var nav_h = $("#nav").height();
  $("#banner").css({
    "marginTop": nav_h+2
  });
  if($(window).width()<=974 && $(window).width()>=360) {
    $(".side-bar img.center-block").css({"width": "50%"});
  }else{
    $(".side-bar img.center-block").css({"width": "100%"});
  }
  $(window).resize(function() {
    var nav_h = $("#nav").height();
    $("#banner").css({
      "marginTop": nav_h+2
    });
    if($(window).width()<=974 && $(window).width()>=360) {
      $(".side-bar img.center-block").css({"width": "50%"});
    }else{
      $(".side-bar img.center-block").css({"width": "100%"});
    }
  });

  //日期
  var day = new Date();
  var y = day.getFullYear()+"年";
  var m = (day.getMonth()+1)+"月";
  var d = day.getDate()+"日";
  var w = "星期";
  switch(day.getDay()){
    case 1: w+="一"; break;
    case 2: w+="二"; break;
    case 3: w+="三"; break;
    case 4: w+="四"; break;
    case 5: w+="五"; break;
    case 6: w+="六"; break;
    default: w+="日";
  };
  $("#date").html(
    "<span>今天是："+y+m+d+"</span>"+
    "<span>&nbsp;&nbsp;"+w+"</span>"
  );

  var  filename=location.href;
  filename=filename.substr(filename.lastIndexOf('/')+1);
  var reg = /(^l)|(^s)/ig;
  if(reg.test(filename)){
    var link = $(".main-list .pdf").attr("src");
    $(".main-list .cat-title").after('<a style="font-size: 20px;margin-right: 30px;" href="http://jingpin.mmvtc.cn/spaqyzlkz/'+link+'">下载此文档</a><a href="https://get.adobe.com/reader/?loc=cn">无法查看？点击下载pdf插件</a>');
  }

});
var index = new Vue({
  el: '#index',
  data: {
    //数据库
    db: {}
  },
  methods: {
    init: function() {
      //返回顶部
      var timer_toTop=null;
      var timer_toContent=null;
      var timer_toContent2=null;

      $("#toTop").on('click',function() {
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

      //获取数据库
      $.ajax({
        // 本地测试使用网上数据库
        // url: 'https://1025623017.github.io/blog/db/db',
        url: '/blog/db/db',
        type: 'GET',
        success: function(rsp) {
          eval('index.db = ' + rsp)
        }
      })
    }
  }
})
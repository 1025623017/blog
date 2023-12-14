var index = new Vue({
  el: '#index',
  data: {
    //数据库
    db: {},
    text_01:'text'
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
        //rl: 'https://1025623017.github.io/blog/db/db',
        url: '/blog/db/db',
        type: 'GET',
        //dataType:'json',
        success: function(rsp) {
          eval('index.db = ' + rsp);
        }

      //console.log('1'+index.db);

      })
    },

    vue_log(){
      console.log('1'+index.db);
    }

  }
})

index.vue_log();

//var t = function()｛document.documentElement.scrollTop=0｝

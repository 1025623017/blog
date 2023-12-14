var index = new Vue({
  el: '#index',
  data: {
    //数据库
    db: {},
    db_empty: true,
    text_01: 'type_out'
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
        url: 'db/db',
        type: 'GET',
        async: false,
        success: function(rsp) {
          setTimeout(()=>{
            try {
              eval('index.db = ' + rsp);
              index.db_empty = true;
              console.log('File '+'"db"'+' in github loaded successful');
            } catch (error){
              console.log(error);
            }
          },2000);
        },
        error: function(rsp) {
          console.log('ajax error!');
          index.db_empty = false;
          //alert('index.db_empty = false;');
          $.ajax({
            url: 'https://1025623017.github.io/blog/db/db',
            type: 'GET',
            async: false,
            success: function(rsp) {
              setTimeout(()=>{
                try {
                  eval('index.db = ' + rsp);
                  console.log('File '+'"db"'+' in github loaded successful');
                  index.db_empty = true;
                } catch (error){
                  console.log(error);
                }
              },2000);
            }
          });
        }
      });
    },

    test: function(log){
      console.log(index.db);
    }

    //---

  }
})

console.log(eval(index.db).length);
console.log(index.db);
index.init();
index.test();

//var t = function()｛document.documentElement.scrollTop=0｝

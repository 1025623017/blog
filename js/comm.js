var index = new Vue({
  el: '#index',
  data: {
    //空的本地数据库
    db: {},
    //获取Ajax数据库失败标识
    db_empty: true
  },
  methods: {
    init: function() {




      $.ajax({
        url: 'db/db',
        type: 'GET',
        async: false,
        //获取网络数据库
        success: function(rsp) {
          eval('index.db = ' + rsp);
          index.db_empty = false;
          console.log('Database Github Version loaded successful');
        },
        //获取本地数据库
        error: function(rsp) {
          $.ajax({
            url: 'https://1025623017.github.io/blog/db/db',
            type: 'GET',
            async: false,
            success: function(rsp) {
              eval('index.db = ' + rsp);
              console.log('You are now using the local database');
              index.db_empty = false;
            }
          });
          console.log('ajax error!');
        }
      });

      //next initiation

    },

    test: function(){
      if (index.db_empty) {
        console.log(index.db);
        console.log('database github version loaded fail');
      };
    },

    //---

  }
})

index.init();
index.test();

//var t = function()｛document.documentElement.scrollTop=0｝

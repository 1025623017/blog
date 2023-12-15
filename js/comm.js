var index = new Vue({
  el: '#index',
  data: {
    //空的本地数据库
    db: {},
    //获取Ajax数据库失败标识
    db_empty: true,
    db_rsp:{}
  },
  methods: {
    init: function() {

      $.ajax({
        url: 'db/db',
        type: 'GET',
        async: false,
        success: function(rsp) {
          eval('index.db = ' + rsp);
          index.db_empty = false;
          console.log('Database Github Version loaded successful');
        },
        error: function(rsp) {
          console.log('DB loaded fail from Github');
          $.ajax({
            url: 'https://1025623017.github.io/blog/db/db',
            type: 'GET',
            async: false,
            success: function(rsp) {
              eval('index.db = ' + rsp);
              console.log('You are now using the local database');
              console.log(index.db);
              index.db_empty = false;
            }
          });
        }
      });

      //next function...

    },

    test: function(){
      if (!index.db_empty) {
        console.log('db_empty is '+index.db_empty);
      };
    },

    //---

  }
})

index.init();

setTimeout(function(){
  index.test();
},1000);
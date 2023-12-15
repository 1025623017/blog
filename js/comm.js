var index = new Vue({
  el: '#index',
  data: {
    //空的本地数据库
    db: {},
    //是否获取到Ajax数据库
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
          console.log(rsp.status);
          setTimeout(()=>{
              eval('index.db = ' + rsp);
              index.db_empty = true;
              console.log('Database Github Version loaded successful');
          },0);
        },
        //获取本地数据库
        error: function(rsp) {
          console.log('ajax error!');
          console.log(rsp.status);
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
                  console.log('You are using the local database');
                  index.db_empty = true;
                } catch (error){
                  console.log(error);
                }
              },0);
            }
          });
        }
      });


      //next initiation
    },

    test: function(log){
      console.log(
        index.db
      )
    }

    //---

  }
})

index.init();
index.test();

//var t = function()｛document.documentElement.scrollTop=0｝

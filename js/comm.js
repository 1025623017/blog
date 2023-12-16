var index = new Vue({
  el: '#index',
  data: {
    //空的本地数据库
    db: {},
    db_adress:'https://raw.githubusercontent.com/1025623017/blog/gh-pages/db/db'
  },
  methods: {
    init: function() {

      $.ajax({
        url: 'db/db',
        type: 'GET',
        async: false,
        success: function(rsp) {
          index.db = eval('index.db = ' + rsp);
          console.log('blog/gh-pages/db/db loaded successful');
        },
        error: function(rsp) {
          console.log('blog/gh-pages/db/db loaded fail');
          $.ajax({
            url: index.db_adress,
            type: 'GET',
            async: true,
            success: function(rsp) {
              index.db = eval('index.db = ' + rsp);
              console.log(index.db_adress + 'loaded successful!');
              console.log('This database is the elder version , uploading the new local database file(push in Github destop) to refresh the page');
            },error: function(rsp){
              console.log(index.db_adress +' not found!');
            }
          });
        }
      });

      //next function...

    },

    test: function(){
      //...
    },

    //...

  }
})

index.init();

setTimeout(function(){
  index.test();
},1000);
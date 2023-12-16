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
          console.log('Local db loaded successful');
        },
        error: function(rsp) {
          console.log('Local db loaded fail');
          $.ajax({
            url: index.db_adress,
            type: 'GET',
            async: true,
            success: function(rsp) {
              index.db = eval('index.db = ' + rsp);
              console.log(index.db_adress + 'loaded successful!');
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
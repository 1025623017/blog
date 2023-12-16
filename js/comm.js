var index = new Vue({
  el: '#index',
  data: {
    //空的本地数据库
    db: {},
    //数据库地址
    db_adress: ''
  },
  methods: {
    init: function() {
      if(window.location.href.includes('file:')){
        index.db_adress = 'https://raw.githubusercontent.com/1025623017/blog/gh-pages/db/db';
        console.log('Testing Mode');
      }else{
        index.db_adress = 'db/db';
        console.log('VPN is not working!');
      };
      index.uAjax();
    },

    uAjax: function(){
      $.ajax({
          url: index.db_adress,
          type: 'GET',
          async: true,
          success: function(rsp) {
            index.db = eval('index.db = ' + rsp);
          },
          error: function(rsp) {
            console.log('db_adress is wrong');
          }
        });
    },

    //...

  }
})

setTimeout(function(){
  index.init();
},0);

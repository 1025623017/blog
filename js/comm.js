var index = new Vue({
  el: '#index',
  data: {
    //数据库地址
    db_adress: '',
    //数据库名
    db: {},
    //瞬时请求时间
    rsp_time: '',
    wiki: '',
    db_temp:{}
  },
  methods: {

    //初始化页面
    init: function() {
      index.is_test();
      index.is_vpn();
    },

    //是否处于测试模式
    is_test: function(){
      if(window.location.href.includes('file')){
        console.log('https://1025623017.github.io/blog/ is in the Testing Mode now.');
        index.db_adress = 'https://raw.githubusercontent.com/1025623017/blog/gh-pages/db/db';
      }else{
        index.db_adress = 'db/db';
      };
    },

    //是否开启VPN
    is_vpn: function(){
      index.uAjax(index.db_adress);
    },

    //ajax
    uAjax: function(_adress){
      $.ajax({
        url: _adress,
          success: function(rsp) {
            index.db = eval('index.db = ' + rsp);
            if(!window.location.href.includes('file')){
              //console.log('');
            }
          },
          error: function(rsp) {
            index.uajax_time();
            index.db = {
              data: [
                {
                  title: '服务器请求失败',
                  contents: '请确保您的VPN处于开启状态',
                  _date: index.rsp_time
                }
              ]
            };
            console.log('服务器请求失败');
          }
        });
    },

    //ajax请求时间
    uajax_time: function(){
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
      index.rsp_time = y+m+d+w;
    },

    //...

  }
})

//启动博客
setTimeout(function(){
  index.init();
},0);

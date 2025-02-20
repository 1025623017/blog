$('#loading').show();

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
    rsp_error: ''
  },
  methods: {

    //初始化页面
    init: function() {
      $('#loading').show();
      index.is_test();
    },

    //是否处于测试模式
    is_test: function(){
      if(!window.location.href.includes('io')){
        index.db_adress = 'db/db';
        console.log('https://1025623017.github.io/blog/ is in the Testing Mode now.');
      }else{
        index.db_adress = 'https://raw.githubusercontent.com/1025623017/blog/gh-pages/db/db';
      };
      index.is_vpn();
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
          if (!index.db.data) {
            index.uFail();
          }
          $('#loading').hide();
          $('#database_list').show();
        },
        error: function(rsp) {
          index.rsp_error = 1;
          index.uajax_time();
          index.uFail();
          $('#loading').hide();
          $('#database_list').show();
        }
      })
    },

    //ajax请求时间
    uajax_time: function(){
      var day = new Date();
      var y = day.getFullYear()+"年 ";
      var m = (day.getMonth()+1)+"月 ";
      var d = day.getDate()+"日 ";
      var w = " 星期";
      var _sec = '';
      if (day.getSeconds()<10) {
        _sec = '0'+day.getSeconds();
      }else{
        _sec = day.getSeconds();
      };
      switch(day.getDay()){
        case 1: w+="一"; break;
        case 2: w+="二"; break;
        case 3: w+="三"; break;
        case 4: w+="四"; break;
        case 5: w+="五"; break;
        case 6: w+="六"; break;
        default: w+="日";
      };
      index.rsp_time ='Request Time: '+day.getHours()+': '+day.getMinutes()+': '+_sec;
      console.log('You are using database: '+index.db_adress);
    },

    uFail: function(){
      index.db = {
        data: [
          {
            title: '文章加载失败',
            contents: '请检查您的网络或VPN状态！',
            _date: index.rsp_time
          }
        ]
      }
    },
    //...

  }
})

//启动博客
setTimeout(function(){
  index.init();
},0);

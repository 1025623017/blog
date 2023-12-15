var database_list = new Vue({
  el: '#database_list',
  data: {
  	db_refresh: {}
  },
  methods: {

    doRefresh: function(){
      db_refresh = index.db;
    }

  }
})

database_list.doRefresh();
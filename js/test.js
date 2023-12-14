var test = new Vue({
  el: '#index',
  data: {
  	excel_list:{
  		a:1,
  		b:2
  	},
  	ppt_list:{}
  },
  methods: {

    getData: function(a){
      console.log(test.excel_list);
      console.log("loading excel data...");
    },

    postData: function(b){
      console.log(test.ppt_list);
      console.log("loading ppt 01...");
    }

  }
})

//test.getData();

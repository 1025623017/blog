// 全局ajax
export function uAjax(init,_this) {
  var type = init.type
  var url = init.url
  var params = init.params
  var successFn = init.success
  var failFn = init.fail
  var showLoading = init.showLoading
  var closeLoading = init.closeLoading

  // 默认自带域名
  var urlDefault = init.urlDefault

  // 默认显示loading
  if (showLoading != false) {
      _this.showLoading = true
  }

  // 默认GET方法
  type = (type==null || type=="" || typeof(type)=="undefined")? "get" : type

  // 设置延时才会得到Vue.http.options.root
  setTimeout(() => {
      // 默认自带域名
      if (urlDefault != false) {
          url = Vue.http.options.root+url
      }
      // 支持get/post/put方法
      if (type=='get') {
          Vue.http.get(url,{params})
          .then(response => {
              if (response.data.code==0) {
                  successFn.call(this,response.data)
              }else if(response.data.code==1){
                  if (failFn) {
                      failFn.call(this,response.data)
                  }
              }else if(response.data.code==2){
                  _this.txtError = response.data.message
                  _this.showError = true
                  setTimeout(() => {
                      router.go('/login')
                  }, 1000)
              }
              console.warn(response)
              // 默认关闭loading
              if (closeLoading != false) {
                  _this.showLoading = false
              }
          },response => {
              console.warn('请求错误')
              console.warn(response)
              _this.showLoading = false
          })
          .catch(console.log)
      }else if(type=='post'){
          //
      }
  }, 500)
}
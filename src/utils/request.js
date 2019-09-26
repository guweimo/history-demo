const ajax = function(method, path, data, resposneCallback) {
  var r = new XMLHttpRequest()
  // 设置请求方法和请求地址
  r.open(method, path, true)
  // 设置发送的数据格式
  r.setRequestHeader('Content-Type', 'application/json')
  // 注册响应函数
  r.onreadystatechange = function() {
    if (r.readyState == 4) {
      resposneCallback(r)
    }
  }

  r.send(data)
}

export default ajax

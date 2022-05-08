import axios from 'axios'
import querystring from 'querystring'
import { baseUrl } from './const'

// 添加请求头
const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '/api' : '/api', // 请求地址的基础路径
  timeout: 60000 // 请求超时时间
})

// 通过拦截器格式化参数
instance.interceptors.request.use(config => {
  // post请求就格式化数据
  // if (config.method === 'post') {
  //   config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  //   config.data = querystring.stringify(config.data)
  // }
  if (config.method !== 'get' && config.method !== 'delete') {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    config.data = querystring.stringify(config.data)
  }
  return config
}, error => Promise.reject(error))

export default (url = '', data = {}, type = 'POST', headers = {}) => {
  return new Promise((resolve, reject) => {
    let httpPromise = null
    if (type.toUpperCase() === 'GET') {
      httpPromise = instance({
        method: type,
        url: url,
        params: data,
        headers,
      })
    } else {
      httpPromise = instance({
        method: type,
        url: url,
        data: data,
        headers,
      })
    }
    httpPromise.then(res => {
      resolve(res.data)
    }).catch(err => {
      let errMsg = '请求失败'
      if (err.response && err.response.data && err.response.data) {
        const data = err.response.data
        // 根据响应主体状态码和响应状态码来判断是否登录了,没登录跳转到登录页
        if (data.c === 20010 && err.response.status === 403) {
          window.location = data.d
          return
          // reject()
        }
        if (data.m) {
          errMsg = err.response.data.m
        }
      } else if (err.response && err.response.status >= 500 && err.response.status < 600) {
        errMsg = '服务器开小差了~'
      } else if (err.code === 'ECONNABORTED') {
        errMsg = '请求超时'
      }
      reject(new Error(errMsg))
    })
  })
}
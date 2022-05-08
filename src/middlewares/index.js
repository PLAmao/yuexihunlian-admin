import { MessageBox } from 'element-ui'

export default {
  install: function (Vue) {
    /**
     * 统一的网络请求处理
     * @param {Promise} requestPromise 请求的Promise
     * @param {Function} successCallback 成功回调
     * @param {Function} errorCallback 失败函数
     * @param {Boolean} selfHandle 是否自己处理错误信息
     */
    Object.defineProperty(Vue.prototype, '$http', {
      value: function (requestPromise, successCallback, errorCallback, selfHandle) {
        requestPromise
          .then(res => {
            if (!res) return
            // 针对有status属性的情况
            if (res.c === 0) {
              successCallback && successCallback(res)
            } else {
              // 其他情况，当成错误信息显示
              const err = new Error(res.m)
              err.code = res.c
              throw err
            }
          })
          .catch(err => {
            console.log(err)
            if (!selfHandle) {
              // 显示错误信息
              this.$message.error(err.message)
            }
            errorCallback && errorCallback(err)
          })
      },
    })

    /**
     * 统一的确认框
     * @param {String} title 标题
     * @param {String} content 文本内容
     * @param {Function} confirmCallback 确定按钮的回调函数
     * @param {Function} cancelCallback 取消按钮回调函数
     */
    Object.defineProperty(Vue.prototype, '$confirm', {
      value: function (title, content, confirmCallback, cancelCallback, options) {
        let defaultOption = {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          lockScroll: false,
          callback(action, instance) {
            if (action === 'confirm') {
              confirmCallback && confirmCallback()
            } else if (action === 'cancel') {
              cancelCallback && cancelCallback()
            }
          },
        }
        if (typeof options === 'object') {
          defaultOption = Object.assign(defaultOption, options)
        }
        MessageBox.confirm(content, title, defaultOption)
      },
    })

    /**
     * 格式化文章内容，去除图片防盗链问题
     */
    Object.defineProperty(Vue.prototype, '$formatContent', {
      value: function (val) {
        return val.replace(/640\?[a-zA-Z0-9=_&]+wx_lazy=\d/g, '640?')
      },
    })
  },
}

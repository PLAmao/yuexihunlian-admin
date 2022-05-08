export default {
  bind: function(el, {
    value
  }) {
    const onClickOutside = value
    // 通过自定义属性记录回调函数
    el.handler = function(e) {
      // 如果点击的元素不是目标元素内
      if (el && !el.contains(e.target)) {
        onClickOutside(e)
      }
    }
    document.addEventListener('click', el.handler, true)
  },
  unbind: function(el) {
    // 解除事件绑定
    document.removeEventListener('click', el.handler, true)
    el.handler = null
  }
}

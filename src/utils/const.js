// 后端接口的基本路径
const baseUrl = process.env.NODE_ENV === 'development' ? '/api' : '/api'
export {
  baseUrl,
}
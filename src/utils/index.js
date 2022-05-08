export function compareVersion(current, min, equal = true) {
  if (!current || !min) return false
  const currentArr = current.split('.')
  const minArr = min.split('.')
  if (Array.isArray(currentArr) && Array.isArray(minArr) && currentArr.length > 0 && minArr.length > 0) {
    const maxLen = currentArr.length < minArr.length ? currentArr.length : minArr.length
    for (let i = 0; i < maxLen; i++) {
      const curentItem = parseInt(currentArr[i]) || 0
      const minItem = parseInt(minArr[i]) || 0
      if (curentItem < minItem) {
        return false
      } else if (curentItem > minItem) {
        return true
      }
    }
    return equal
  }
  return false
}

export const formatSeconds = value => {
  let secondTime = ~~value
  let minuteTime = 0
  let hourTime = 0
  let result = ''
  if (secondTime > 60) {
    minuteTime = secondTime / 60
    secondTime = secondTime % 60
    if (minuteTime > 60) {
      hourTime = minuteTime / 60
      minuteTime = minuteTime % 60
    }
  }
  if (hourTime <= 0) {
    result = `${~~minuteTime}分钟`
  } else if (minuteTime !== 0) {
    result = `${~~hourTime}小时${~~minuteTime}分`
  } else {
    result = `${~~hourTime}小时`
  }

  return result
}

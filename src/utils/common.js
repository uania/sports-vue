// import store from '@/store'

// import { VisitLogs } from '@/api/Home.js'

// !函数节流
var prev = Date.now()
export function throttle (fn, delay) {
  var now = Date.now()
  if (now - prev > delay) {
    fn()
    prev = Date.now()
  }
}
// !函数防抖
export function debounce (fn, delay) {
  // 记录上一次的延时器
  var timer = null
  // eslint-disable-next-line no-redeclare
  var delay = delay || 200
  return function () {
    var args = arguments
    var that = this
    // 清除上一次延时器
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(that, args)
    }, delay)
  }
}

// 时间格式处理
export function _formateDate(date) {
  let d
  if (!date) {
    d = new Date()
  } else {
    let dateStr = date.replace(/-/g, '/')
    d = new Date(dateStr)
  }
  let yy = d.getFullYear()
  let mm = d.getMonth() + 1 >= 10 ? d.getMonth() + 1 : `0${d.getMonth() + 1}`
  let dd = d.getDate() >= 10 ? d.getDate() : `0${d.getDate()}`
  return `${yy}-${mm}-${dd}`;
}

// 处理软键盘消失页面不回弹问题
export function _handleInput() {
  let input = document.getElementsByTagName('input')
  let scrollTop = 0
  window.onscroll = function () {
    scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  }
  input.forEach(item => {
    item.addEventListener('blur', function () {
      window.scrollTo(0, scrollTop)
    })
  })
}

// // !pv和uv统计
// export function VisitLog (to) {
//   // !统计
//   const data = {
//     VisitType: 1,
//     Gid: store.state.userInfo.Id ? store.state.userInfo.Id : '',
//     Url: window.location.href,
//     PageUrl: to.path,
//     RelationId: to.query.id ? to.query.id : ''
//   }

//   VisitLogs(data).then(res => {})
// }


// !滚动到顶部
export function scollTop() {
  let top = document.documentElement.scrollTop || document.body.scrollTop;
  // 实现滚动效果 
  const timeTop = setInterval(() => {
    document.body.scrollTop = document.documentElement.scrollTop = top -= 100;
    if (top <= 0) {
      clearInterval(timeTop);
    }
  }, 10);
}
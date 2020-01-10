// 为了能够准确判断，我们在函数内部使用严格模式
// 因为非严格模式会自动指向全局
function fn() {
  'use strict'
  console.log(this)
}

fn() // fn 是调用者，独立调用，this 为 undefined
window.fn() // fn 是调用者，被 window 所拥有，this 为 window 对象

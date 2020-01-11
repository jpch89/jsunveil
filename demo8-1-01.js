// 自执行创建模块
;(function() {
  // states 结构预览
  // states = {
  //   a: 1,
  //   b: 2,
  //   m: 30,
  //   o: {}
  // }
  var states = {} // 私有变量，用来存储状态与数据

  // 判断数据类型
  function type(elem) {
    if (elem == null) {
      return elem + ''
    }

    return toString
      .call(elem)
      .replace(/[\[\]]/g, '')
      .split(' ')[1]
      .toLowerCase()
  }

  /**
   * @Param name 属性名
   * @Description 通过属性名获取保存在 states 中的值
   */
  function get(name) {
    return states[name] ? states[name] : ''
  }

  function getStates() {
    return states
  }

  /**
   * @param options {object} 键值对
   * @param target {object} 属性值为对象的属性，只在函数实现，递归调用时传入
   * @desc 通过传入键值对的方式修改 state 树，使用方式与小程序的 data 或者 react 中的 setStates 类似
   */
  function set(options, target) {
    var keys = Object.keys(options)
    var o = target ? target : states

    keys.map(function(item) {
      if (typeof o[item] == 'undefined') {
        o[item] = options[item]
      } else {
        type(o[item]) == 'object'
          ? set(options[item], o[item])
          : (o[item] = options[item])
      }
      return item
    })
  }

  // 对外提供接口
  window.get = get
  window.set = set
  window.getStates = getStates
})()

// 具体使用方式如下
set({ a: 20 }) // 保存属性 a
set({ b: 100 }) // 保存属性 b
set({ c: 10 }) // 保存属性 c

// 保存属性 o，它的值为一个对象
set({
  o: {
    m: 10,
    n: 20
  }
})

// 修改对象 o 的 m 值
set({
  o: {
    m: 1000
  }
})

// 给对象 o 中增加一个 c 属性
set({
  o: {
    c: 100
  }
})

console.log(getStates())

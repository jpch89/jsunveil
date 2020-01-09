// 改动二
var name = 'window'

var p = {
  name: 'Peter',
  getName: function() {
    // 利用变量保存的方式保证其访问的是 p 对象
    var self = this
    return function() {
      return self.name
    }
  }
}

var getName = p.getName()

var _name = getName(p)
console.log(_name)
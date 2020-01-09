// 改动一
var name = 'window'

var p = {
  name: 'Peter',
  getName: function() {
    return function() {
      return this.name
    }
  }
}

var getName = p.getName()

// 利用 call 的方式让 this 指向 p 对象
var _name = getName.call(p)
console.log(_name)
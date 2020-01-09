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
var _name = getName()
console.log(_name)  // window
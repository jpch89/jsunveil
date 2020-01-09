function test() {
  console.log(foo)
  console.log(bar)

  var foo = 'Hello'
  console.log(foo)
  var bar = function () {
    return 'world'
  }

  function foo() {
    return 'hello'
  }
}

test()
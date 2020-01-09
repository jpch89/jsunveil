function add(x) {
  return function _add(y) {
    return x + y
  }
}

add(2)(3)


module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  let result = matrix.map((elem, index) => {
    if(index % 2) {
      return elem.reverse()
    }
    return elem
  })
  return [].concat(...result)
}

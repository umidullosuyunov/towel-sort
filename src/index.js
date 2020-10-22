module.exports = function towelSort (matrix) {
  if (matrix == undefined) return [];
  else {
    for (let i = 0; i < matrix.length; i++) {
      if(i&2 !== 0) {
        matrix[i] = matrix[i].flat().reverse();
      } else {
        matrix[i] = matrix[i].flat();
      }
    }
    return matrix.flat();
  }
}

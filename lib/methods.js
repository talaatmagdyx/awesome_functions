require('./config_methods');

let ArrayMethods = {}

// ([1,2,2,3,3,3].uniq() => [1,2,3])
ArrayMethods.uniq = uniq
// alternate solution using 'forEach'
ArrayMethods.uniq2 = uniq2
// [-1, 0, 2, -2, 1].pairsSumToZero() => [ [ 2, 3 ], [ 0, 4 ] ]
ArrayMethods.pairsSumToZero = pairsSumToZero
// [0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose() --> [ [ 0, 3, 6 ], [ 1, 4, 7 ], [ 2, 5, 8 ] ]
ArrayMethods.transpose = transpose

module.exports = ArrayMethods

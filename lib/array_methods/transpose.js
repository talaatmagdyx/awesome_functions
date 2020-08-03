// Array#transpose - where we have a two-dimensional array representing a matrix. returns the transpose
// [0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose() --> [ [ 0, 3, 6 ], [ 1, 4, 7 ], [ 2, 5, 8 ] ]
transpose = Array.prototype.transpose = function() {

    // this creates the empty transposed array
    // just a neat trick to avoid iterating
    const columns = Array.from(
        { length: this[0].length },
        () => Array.from({ length: this.length })
    );

    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this[i].length; j++) {
            columns[j][i] = this[i][j];
        }
    }

    return columns;
};

module.exports = transpose
helper_array = require('./helper_array')
let indexes = {}
//  first elements of an array
// [].first  => undefined
// [1,2,3].first => 1
indexes.first = Array.prototype.first = function() {
    return this[0] ;
};

//  first elements of an array
// [].last => undefined
// [1,2,3].last => 3
indexes.last = Array.prototype.last = function() {
    return this[this.length - 1];
};

//  get element from an array using index
// [].at(100) => undefined any index not found return undefined
// [1,2,3].at(0) => 1
// [1,2,3].at(-1) => 3
indexes.at = Array.prototype.at = function(idx) {
    if (idx >= 0){
        return this[idx];
    }
    return this[this.length + idx]
};

//  get the first n elements of an array
// ex: array size = 10 and need elements form 0 to 6 => Array#take(6)
// [].take(100) => [] if n_elements > array of size return []
// [1,2,3,4,5,6].take(4) => [1, 2, 3, 4]
// [1,2,3].take(1) => [1]
// [1,2,3].take(0) => []
indexes.take = Array.prototype.take = function(n_elements) {
    if(n_elements > 0) return [] ;
    return this.slice(0, n_elements);

};

//  get the last n elements of an array
// ex: array size = 10 and need elements form 4 to 10 => Array#drop(6)
// [].drop(100) => [] if n_elements > array of size return []
// [1,2,3,4,5,6].drop(4) => [3, 4, 5, 6]
// [1,2,3].drop(1) => [1]
// [1,2,3].drop(0) => []
indexes.drop = Array.prototype.drop = function(n_elements) {
    if(n_elements <= 0) return [] ;
    return this.slice(n_elements, this.last());

};

//  get count of elements in array
// [].count() => 0
// [1].count() => 1
indexes.count = Array.prototype.count = function() {
    return this.length;

};

//  get size of array
// [].size() => 0
// [1].size() => 1
indexes.size = Array.prototype.size = function() {
    return this.length;

};

//  get size of array
// [].count() => 0
// [1].count() => 1
indexes.count = Array.prototype.count = function() {
    return this.length;
};

// check whether an array contains any elements at all
// [].empty ==> true
// [1].empty ==> false
indexes.isEmpty = Array.prototype.isEmpty = function() {
    return this.length === 0;

};
// To delete an element at a particular index:
// [1,2,3,4].delete_at(1)  => [1,3,4]
// [].delete_at(0)  => []
indexes.delete_at = Array.prototype.delete_at = function(idx) {
    if(this.isEmpty()) return [];
    return this.splice(idx, 1)
};

//  insert you can add a new element to an array at any position
//Using the insert method, you can also insert multiple values at once:
// [1,2,3].insert(0, [10,11]) => [10,11,1,2,4]
// if index > array.size add items to end of arrays
// [1,2,3].insert(1000, [10,11]) => [1,2,4,10,11]
indexes.insert = Array.prototype.insert = function ( index, items ) {
    if(Array.isArray(items)) {
        items.reverse().forEach(item => this.splice(index, 0, item));
        return this;
    }
    return this.splice(index, 0, items)
};

//  initial size of the Array and fill value of array
// take two parameters arr_length, value
// new_array() => [ null ]
// new_array(2, {}) => [ {}, {} ] array of objects
// new_array(3, true) => [ true, true, true ]
indexes.new_array =  function new_array (arr_length = 1, value = null) {
    return new Array(arr_length).fill(value);
};

//  initial size of the Array and fill value of array
// take two parameters arr_length, value
// [].new => [ null ]
// [].new(2, {}) => [ {}, {} ] array of objects
// [].new(3, true) => [ true, true, true ]
// Array#new()
indexes.new_array2 = Array.prototype.new = function (arr_length = 1, value = null) {
    return new Array(arr_length).fill(value);
};

// Array#pairsSumToZero - returns an array of position pairs where the elements sum to zero
// console.log([1,2,3,-1].pairsSumToZero()); ===> [ [ 0, 3 ] ]
//
indexes.pairsSumToZero = Array.prototype.pairsSumToZero = function() {
    let pairs = [];
    const indexHash = {};

    this.forEach((el, idx) => {
        if (indexHash[el * -1]) {
            const newPairs = indexHash[el * -1].map((prevIdx) => [prevIdx, idx]);

            // remember, concat doesn't mutate the original object
            pairs = pairs.concat(newPairs);
        }

        // since we can't set a default attribute value in JavaScript,
        // we will need to check for existence first
        indexHash[el] ? indexHash[el].push(idx) : indexHash[el] = [idx];
    });

    return pairs;
};

// Array#transpose - where we have a two-dimensional array representing a matrix. returns the transpose
// [0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose() --> [ [ 0, 3, 6 ], [ 1, 4, 7 ], [ 2, 5, 8 ] ]
indexes.transpose = Array.prototype.transpose = function() {

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

// Array#uniq - returns a new array containing
// each individual element of the original array only once (creating all unique elements)
// ([1,2,2,3,3,3].uniq() => [1,2,3])
indexes.uniq = Array.prototype.uniq = function() {
    let uniqueArray = [];

    for (let i = 0; i < this.length; i++) {
        if (uniqueArray.indexOf(this[i]) === -1) {
            uniqueArray.push(this[i]);
        }
    }
    return uniqueArray;
};

// Array#uniq - returns a new array containing
// each individual element of the original array only once (creating all unique elements)
// ([1,2,2,3,3,3].uniq2() => [1,2,3])
indexes.uniq2 = Array.prototype.uniq2 = function() {
    let uniqueArray = [];

    // here we are using Array#forEach with a callback that is
    // closing over 'uniqueArray'
    this.forEach(function (el) {
        if (!uniqueArray.includes(el)) {
            uniqueArray.push(el);
        }
    });

    return uniqueArray;
};

// Array#compact - returns a array after remove null, undefined
// [1,2,'',3,null,undefined,null,undefined, 'test', 'HH', ''].compact() => [1,2,'',3,'test','HH','']
// [1,2,'',3,null,undefined,null,undefined, 'test', 'HH', ''].compact(true) => [1,2,3,'test','HH']

indexes.compact = Array.prototype.compact = function(clear_empty_str = false) {

    // if need clear empty string also
    if (clear_empty_str) return this.filter(n => n);

    return this.filter(function (el) {
        return el != null;
    });
};

// Array#max - returns a array of max items
// [1,2,3,4,5,6,7,8,99,32131].max() => 32131
// [1,2,3,4,5,6,7,8,99,32131].max(3) => [ 32131, 99, 8 ]
indexes.max = Array.prototype.max = function(max_num = 1) {
    // let arr = [...this]
    if(this.size() < max_num) return 'Max is greater than size of array'
    let max_list = []
    for (i = 1; i <= max_num; i++) {
        max_list.push(this.sort().last())
        this.pop()
    }
    if(max_list.size()===1) return max_list.first();
    return max_list;
};

// Array#intersection In mathematics, the intersection of two sets A and B,
// denoted by A ∩ B, is the set containing all elements of A that also belong to B.
// [1,2,3,4].intersection([3]) ----> [3]
indexes.intersection = Array.prototype.intersection = function (array2){
    return this.filter(x => array2.includes(x));
}
difference

// Array#difference
// [1,2,3,4].difference([3]) ----> [1,2,4]
indexes.difference = Array.prototype.difference = function (array2){
    return this.filter(x => !array2.includes(x));
}
module.exports = indexes
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
    if(typeof items === "object") {
        items.reverse().forEach(item => this.splice(index, 0, item));
        return this;
    }
    return this.splice(index, 0, items)
};
module.exports = indexes
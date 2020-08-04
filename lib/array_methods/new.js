//  initial size of the Array and fill value of array
// take two parameters arr_length, value
// new_array() => [ null ]
// new_array(2, {}) => [ {}, {} ] array of objects
// new_array(3, true) => [ true, true, true ]
new_array =  function new_array (arr_length = 1, value = null) {
    const arr = new Array(arr_length).fill(value);
    return arr;
};

//  initial size of the Array and fill value of array
// take two parameters arr_length, value
// [].new => [ null ]
// [].new(2, {}) => [ {}, {} ] array of objects
// [].new(3, true) => [ true, true, true ]
// Array#new()
new_array2 = Array.prototype.new = function (arr_length = 1, value = null) {
    const arr = new Array(arr_length).fill(value);
    return arr;
};


module.exports = new_array
module.exports = new_array2

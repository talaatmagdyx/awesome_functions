helpers = {}

helpers.max_num = function (array) {
    return Math.max(...array)
}

helpers.max_str = function (array) {
    return   array.sort(function (a, b) { return b.length - a.length; })[0];
}

helpers.max_choose = function (array){
    return Number.isInteger(array[0]) ? helpers.max_num(array) : helpers.max_str(array)
}


module.exports = helpers
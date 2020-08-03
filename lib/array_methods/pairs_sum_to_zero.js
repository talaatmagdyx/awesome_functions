// Array#pairsSumToZero - returns an array of position pairs where the elements sum to zero
// This time we've reduced the time complexity from N^2 to N
// by using a hash
pairsSumToZero = Array.prototype.pairsSumToZero = function() {
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

module.exports = pairsSumToZero
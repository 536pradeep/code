// Install lodash: npm install lodash
const _ = require('lodash');

function sumArray(arr) {
    return _.sum(arr);
}

console.log(sumArray([1, 2, 3, 4]));
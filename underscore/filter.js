const _ = require("underscore");
const assert = require('assert');

let array_1 = [3, 2, 1];

let target_1 = _.filter(array_1, (element, index, list) => {
    return element > 2;
});

assert.deepEqual(target_1, [3]);

let target_2 = _.filter(array_1, (element, index, list) => {
    return list[index] > 2;
});

assert.deepEqual(target_2, [3]);

let target_3 = _.filter(array_1, (element, index, list) => {
    return list[index] > 20;
});

assert.deepEqual(target_3, []);


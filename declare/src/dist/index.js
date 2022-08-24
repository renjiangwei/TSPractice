"use strict";
let b = 'H';
console.log(PEOPLE_COUNT);
let s = 'xl';
let c = {
    name: 'df',
    size: 's',
    price: 12.3
};
getSum = (...args) => {
    return args.reduce((pre, item) => pre + item);
};
console.log(getSum(1, 3, 4, 2));

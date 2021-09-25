const range = function (start, end, step = start > end ? -1 : 1) {
let arr = [];
if (step < 0) {
    for (i = start; i >= end; i -= step * -1) {
    arr.push(i);
    }
} else {
    for (let i = start; i <= end; i += step) {
    arr.push(i);
    }
}
return arr;
};

const sum = function (arr) {
let total = 0;
for (let num = 0; num < arr.length; num++) {
    total += arr[num];
}
return total;
};

console.log(sum(range(5, 2, -1)));
console.log(sum(range(1, 5)));

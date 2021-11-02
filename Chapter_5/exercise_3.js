function every(array, test) {
  // Your code here.
    for (let element of array) {
        if (!test(element)) {
        return false;
        }
    }
    return true;
};

function every2(array, test) {
    return !array.some(function (element) {
        return !test(element);
    });
};

console.log(every2([1, 3, 5], (n) => n < 10));
// → true
console.log(every2([8, 4, 16], (n) => n < 10));
// → false
console.log(every2([], (n) => n < 10));
// → true

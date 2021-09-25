const reverseArray = function (arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    };
    return newArr;
};

const reverseArrayInPlace = function (arr) {
    let newArr = reverseArray(arr);
    for (let i = 0; i < arr.length; i++){
        arr[i] = newArr[i];
    }
};

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
console.log(reverseArray(arrayValue));

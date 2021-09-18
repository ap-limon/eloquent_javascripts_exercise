const isEven = function(num) {
  if(num > 0 && num % 2 === 0){
    return true;
  } else if(num > 0 && num % 2 !== 0) {
    return false;
  } else {
    return isEven(num);
  }
};

console.log(isEven(50))
console.log(isEven(75))
console.log(isEven(-1))
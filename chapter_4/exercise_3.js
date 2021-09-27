const arrayToList = function(array){
  let list = null;
  for(let i = array.length - 1; i >= 0; i--){
    list = {
      value: array[i],
      rest: list
    };
  };
  return list;
};

const listToArray = function(list){
  let array = [];
  for(let node = list; node; node = node.rest){
    array.push(node.value);
  };
  return array;
};

const prepend = function(value, list){
  return {
    value,
    rest: list
  };
};

const nth = function(list, n){
  if(!list){
    return undefined;
  } else if(n === 0){
    return list.value;
  } else {
    return nth(list.rest, n - 1);
  };
};


console.log(arrayToList([4,5,6]));
console.log(listToArray(arrayToList([4,5,6])));
console.log(prepend(20, prepend(10,null)));
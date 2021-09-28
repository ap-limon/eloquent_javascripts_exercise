const deepEqual = function (a, b){
  if(a === b) {return true};
  if(a === null || b === null || typeof a !== 'object' || typeof b !== 'object') {return false};
  let keysA = Object.keys(a);
  let keysB = Object.keys(b);
  if(keysA.length !== keysB.length){return false};
  for(let key of keysA){
    if(!keysB.includes(key) || !deepEqual(a[key], b[key])){return false};
  };
  return true;
};
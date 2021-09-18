const counter =function(str, char) {
  let count = 0;
  for(let i = 0; i < str.length; i++){
    if(str[i] === char){
      count++;
    };
  };
  return count;
};

const countBs = function(str, char = 'B') {
  return counter(str, char);
};

const countChar = function(str, char){
  return countBs(str, char);
};

console.log(countBs("BBC"))
console.log(countChar("kakkerlak", "k"));
//exercise 3: CHESSBOARD
let sp = " ";
let hash = "#";
let str = "";
for (let j = 0; j < 8; j++) {
    str += "\n";
    for (let i = 0; i < 8; i++) {
        // console.log(`${i} + ${j} = ${i+j}`);
        if ((i + j) % 2 === 0) {
        str += sp;
        } else {
        str += hash;
        }
    }
}
console.log(str);

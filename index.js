//chapter 6 The Secret Life Of Objects

class Matrix {
  constructor(height, width, element=(x, y) => undefined ){
    this.height= height;
    this.width= width;
    this.content= [];
    
    for(let y = 0; y < this.height; y++){
      for(let x = 0; x < this.width; x++){
        this.content[y * width + x] = element(x,y);
      }
    }
  }
}


let xMatrix = new Matrix(4, 2, element = (x, y) => 'x: ' + x + ', ' + 'y: ' + y);

//console.log(xMatrix);


//exercise_1 making vector class
class Vec{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  
  plus(others){
    return new Vec(this.x+others.x, this.y+others.y);
  }
  
  minus(others){
    return new Vec(this.x-others.x, this.y-others.y);
  }
}


console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
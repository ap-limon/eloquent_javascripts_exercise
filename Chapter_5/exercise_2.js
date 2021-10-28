function loop(start, test, action, body) {
  for(let value = start; test(value); value = action(value)){
    body(value);
    }
  }
loop(3, n => n > 0, n => n - 1, console.log);
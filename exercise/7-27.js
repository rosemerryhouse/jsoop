//es6

function* range(start, end, step) {
  while (start < end) {
    debugger;
    yield start;
    start += step;
  }
}

//實作
for (let i of range(0, 10, 2)) {
  console.log(i); // 0, 2, 4, 6, 8
}

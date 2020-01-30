var readlineSync = require('readline-sync');
const a = readlineSync.question('Enter 0 for iteration and 1 for recursion');
const b = readlineSync.question('enter the number');

if (a == 0) {
  console.log(fiboiter(b));
} else if (a == 1) {
  console.log(fibo(n));
} else {
  console.log('Invalid Input');
}

function fibo(n) {
  if (n <= 1) {
    return n;
  }
  return fibo(n - 1) + fibo(n - 2);
}

function fiboiter(n) {
  arr = [0, 1];
  for (var i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
}

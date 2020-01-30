var readlineSync = require('readline-sync');
const a = Number(
  readlineSync.question('Enter 0 for iteration and 1 for recursion')
);
const b = Number(readlineSync.question('enter the number'));
if (a == 0) {
  console.log(factiter(b));
} else if (a == 1) {
  console.log(factrec(b));
} else {
  console.log('Invalid Input');
}

function factrec(n) {
  if (n <= 0) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}

function factiter(n) {
  var s = 1;
  for (var i = 0; i <= n; i++) {
    s = s * i;
  }
  return s;
}

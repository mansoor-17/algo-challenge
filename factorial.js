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

function *factorial(n) {
  var total = 1
  for (var i = 1; i <= n; i++) {
    total *= i
    yield total
  }
}

for (var n of factorial(5)) {
  console.log(n)
}

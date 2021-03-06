Array.prototype.count = function(n) {
  var count = 0;
  for (var i = 0; i < this.length; i++) {
    if (this[i] == n) count++;
  }
  return count;
}

function primeFactors(n) {
  var f = [];
  var d = 2;
  while (n > 1) {
    while (n%d==0) {
      f.push(d);
      n = n/d;
    }
    d++;
  }
  return f;
}

function smallestDivTo(x) {
  var factors = [];
  for (var i = 2; i <= x; i++) {
    var f = primeFactors(i);
    for (var j = 0; j < f.length; j++) {
      if (!factors[f[j]] || (f.count(f[j]) > factors[f[j]])) factors[f[j]] = f.count(f[j]);
    }
  }
  var result = 1;
  for (var i = 0; i < factors.length; i++) {
    if (factors[i]) result *= Math.pow(i, factors[i]);
  }
  return result;
}

test("smallestDivTo", function() {
  equal(smallestDivTo(10), 2520);
  equal(smallestDivTo(20), 232792560);
});
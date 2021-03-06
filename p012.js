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

function numDivisors(n) {
  var pf = primeFactors(n);
  var buckets = [];
  for (var i = 0; i < pf.length; i++) {
    if (!buckets[pf[i]]) buckets[pf[i]] = 1;
    else buckets[pf[i]]++;
  }
  var total = 1;
  for (var i = 0; i < buckets.length; i++) {
    if (buckets[i]) total *= (buckets[i]+1)
  }
  
  return total;
}

function triWithDivisors(n) {
  var i = 2;
  while(true) {
    var t = (i * (i+1))/2;
    if (numDivisors(t) > n) return t;
    i++;
  }
}

test("triWithDivisors", function() {
  equal(triWithDivisors(5), 28);
  equal(triWithDivisors(500), 76576500);
});

test("numDivisors", function() {
  equal(numDivisors(1), 1);
  equal(numDivisors(3), 2);
  equal(numDivisors(6), 4);
  equal(numDivisors(10), 4);
  equal(numDivisors(15), 4);
  equal(numDivisors(21), 4);
  equal(numDivisors(28), 6);
});
var mem = [];

function chainLengthRec(n) {
  if (mem[n]) return mem[n];
  var result = 1;
  if (n == 1) return result;
  if (n%2==0) result += chainLengthRec(n/2);
  else result += chainLengthRec(3*n+1);
  
  mem[n] = result;
  return result;
}

function chainLength(n) {
  return chainLengthRec(n, 1);
}

function longestChain(n) {
  var longest = 0;
  var num = n-1;
  for (var i = n-1; i > 0; i--) {
    var chain = chainLength(i);
    if (chain > longest) {
      longest = chain;
      num = i;
    }
  }
  return num;
}

test("longestChain", function() {
  equal(longestChain(1000000), 837799);
});

test("chainLength", function() {
  equal(chainLength(13), 10);
  equal(chainLength(2), 2);
  equal(chainLength(3), 8);
  equal(chainLength(4), 3);
  equal(chainLength(5), 6);
});
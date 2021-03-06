function sumOfSquares(x) {
  return ((2*x*x*x) + (3*x*x) + x)/6;
}

function  squareOfSum(x) {
  var sum = (x * (x + 1))/2;
  return sum*sum;
}

function sumDiff(x) {
  return squareOfSum(x) - sumOfSquares(x);
}

test("sumOfSquares", function() {
  equal(sumOfSquares(1), 1);
  equal(sumOfSquares(2), 5);
  equal(sumOfSquares(3), 14);
  equal(sumOfSquares(10), 385);
});

test("squareOfSum", function() {
  equal(squareOfSum(1), 1);
  equal(squareOfSum(2), 9);
  equal(squareOfSum(3), 36);
  equal(squareOfSum(10), 3025);
});

test("sumDiff", function() {
  equal(sumDiff(1), 0);
  equal(sumDiff(2), 4);
  equal(sumDiff(3), 22);
  equal(sumDiff(10), 2640);
  equal(sumDiff(100), 25164150);
});
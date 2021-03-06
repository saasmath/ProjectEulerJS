function isPalindrome(x) {
  var str = x.toString();
  for (var i = 0; i <= str.length/2; i++) {
    if (str[i] != str[(str.length-i)-1]) return false;
  }
  return true;
}

function largestPalinOfDigits(x) {
  var min = Math.pow(10, x-1);
  var max = Math.pow(10, x)-1;
  var curr = 0;
  for (var i = max; i >= min; i--) {
    for (var j = i; j >= min; j--) {
      var prod = i*j;
      if (prod > curr && isPalindrome(prod)) curr = prod;
    }
  }
  
  return curr;
}

test("Palindrom tests", function() {
  ok(isPalindrome(1));
  ok(isPalindrome(11));
  ok(isPalindrome(101));
  ok(isPalindrome(1001));
  ok(isPalindrome(111));
  ok(!isPalindrome(102));
  ok(!isPalindrome(201));
});

test("Largest palindome tests", function() {
  equal(largestPalinOfDigits(2), 9009);
  equal(largestPalinOfDigits(3), 906609);
});
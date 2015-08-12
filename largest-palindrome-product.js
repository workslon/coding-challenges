var printLargestPalindrom = function (n) {
  var result = 0;

  for (var i = n; i--;) {
    for (var j = i; j--;) { // var j = i;
      var res = i * j + '';
      
      if(+res < result) continue;
      
      if (res === (res.split('').reverse()).join('')) {
        result = res;
      };
    }
  }

  console.log(result);
};

console.time('a');
printLargestPalindrom(100)
console.timeEnd('a');
/**
 * STRING PERMUTATIONS
 * Hard
 * https://www.codeeval.com/open_challenges/14/
 */

var fs = require('fs');

var result = [],
    factorial = 0,

    getFactorial = function(num) {
      var tmp;
      if (num < 0) {
        return -1;
      } else if (num == 0) {
        return 1;
      }
      tmp = num;
      while (num-- > 2) {
        tmp *= num;
      }

      return tmp;
    },

    permute = function (arr, startIndex) {
      if (!result.length) {
        result.push(arr[0]);
      }

      for (var j = 0; j < arr.length; j ++) {
        var i = startIndex + 1;

        for (; i < arr[0].length; i ++) {
          var permutedArr = arr[j].split('').slice();
          var tmp = permutedArr[i];

          permutedArr[i] = permutedArr[startIndex];
          permutedArr[startIndex] = tmp;

          result.push(permutedArr.join(''));
        }
      }

      if (result.length >= factorial) {
        console.log(result.sort().join(','));
      } else {
       permute(result.slice(), startIndex + 1);
      }
    };

// initialize
fs.readFile(process.argv[2], 'utf-8', function (err, data) {
  data.split('\n').forEach(function (word) {
    if (word !== '') {
      factorial = getFactorial(word.length);
      result.length = 0;
      permute([word], 0);
      return;
    }
  });
});
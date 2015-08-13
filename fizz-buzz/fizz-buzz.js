/**
 * FIZZ BUZZ
 * https://www.codeeval.com/open_challenges/1/
 */

var fs = require('fs');

(function printSeries(constrains) {
  var file = process.argv[2];

  if (!file) {
    console.log('Please provide some test file!');
  }

  fs.readFile(file, 'utf-8', function (err, data) {
    var testCases = data.split('\n');

    if (testCases.length <= 21) {
      testCases.forEach(function (chunk) {
        var chunkArr = chunk.split(' '),
            x = chunkArr[0],
            y = chunkArr[1],
            n = chunkArr[2],
            outputArray = [];      

        if (constrains.forX(x) &&
            constrains.forY(y) &&
            constrains.forN(n)) {

          for (var i = 1; i <= n; i ++) {
            var output = i;

            if (!(i % x)) {output = 'F';}
            if (!(i % y)) {output = 'B';}
            if (!(i % x) && !(i % y)) {output = 'FB';}

            outputArray.push(output);
          }

          console.log(outputArray.join(' '));
        } else {
          return true;
        }
      });
    } else {
      console.log('Please provide no more than 20 test cases!');
    }
  });

})({
  forX: function (x) {
    return (x <= 20);
  },
  forY: function (y) {
    return y <= 20;
  },
  forN: function (n) {
    return n >= 21 && n <= 100;
  }
});

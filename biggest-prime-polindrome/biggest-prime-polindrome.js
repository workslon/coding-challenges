/**
 * Biggest Prime Polindrome
 * Hard
 * https://www.codeeval.com/open_challenges/3/
 */

var fs = require('fs');
var i = 0;
var j = 0;
var flg = false;

for (i = 999; i > 0; i -= 2) {
  i = ('' + i);

  if (i === i.split('').reverse().join('')) {
    for (j = Math.ceil(Math.sqrt(i)); j !== 1; j --) {
      if (!(i % j)) {
        flg = true;
        break;
      }
    }

    if (flg) {
      flg = false;
      continue;
    } else {
      console.log(i);
      break;
    }
  }
}
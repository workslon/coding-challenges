/**
 * Longest Common Sequences
 * Hard
 * https://www.codeeval.com/open_challenges/6/
 */

var fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', function (err, data) {

  data.split('\n').forEach(function (chunk) {
    if (chunk !== '') {
      var words = chunk.split(';'),
          word1 = words[0].split(''),
          word2 = words[1],

          newword2 = [],

          index = -1,

          temp = [],

          result = [];

      for (var i = word1.length; i --;) {
        var index = word2.indexOf(word1[i]);

        if (!~index) {
          word1.splice(i, 1);
        } else {
          newword2.push(word2[index]);
        }
      }

      // console.log('word1:', word1);
      // console.log('word2:', newword2);

      var fn = function (word1, word2) {
        for (var i = 0; i < word1.length; i ++) {
          fn2(0, word1[i], word1, word2);
        }
      },

      fn2 = function (start, letter, word1, word2) {
        for (var i = start; i < word2.length; i ++) {
          if (letter === word2[i]) {
            result.push(letter);
            fn2((i + 1), word1[start + 1], word1, word2);
            break;
          }
        }
      };

      // for (var i = word1.length; i --;) {
        fn(word1, newword2);
        // word1.shift();
        // result.push("---");
      // }

      console.log(result);

      return false;
    }
  });
});

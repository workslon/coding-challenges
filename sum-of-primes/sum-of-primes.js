/**
 * Sum Of Primes
 * Easy
 * https://www.codeeval.com/open_challenges/4/
 */

var primes = [2],
    i = 3, // start index
    l = 1, // `primes` array length
    flg = true,
    sum = 2,
    j;

while (true) {
  for (j = 0; j < l; j ++) {
    if (!(i % primes[j])) {
      flg = false;
      break;
    }
  }

  if (l === 1000) {
    break;
  }

  if (flg) {
    primes.push(i);
    l += 1;
    sum += i;
  } else {
    flg = true;
  }

  i ++;
}

console.log(sum);
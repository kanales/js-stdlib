"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pow = pow;
exports.isPrime = isPrime;
exports.integrate = integrate;

var _random = require("./random");

/**
 * Returns x^n (mod m)
 * @param x 
 * @param n 
 * @param m 
 */
function pow(x, n, m) {
  if (n == 0) return 1;
  if (n % 2 == 0) return Math.pow(pow(x, n / 2, m), 2) % m;
  return x * pow(x, n - 1, m) % m;
}
/**
 * 
 * @param n 
 * @param rounds 
 * @returns true if n is prime (with probability 4^-rounds to fail)
 */


function isPrime(n) {
  var rounds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
  n = Math.abs(n); // quick tests

  var primes = [2, 3, 5, 7, 11];
  if (n < 10) return primes.includes(n);
  if (primes.some(function (p) {
    return n % p == 0;
  })) return false; // factor n as 2^r * d + 1

  var r = 0;
  var d = n - 1;

  while (d % 2 == 0) {
    d /= 2;
    r += 1;
  }

  for (var i = 0; i < rounds; i++) {
    var a = (0, _random.randint)(2, n - 2);
    var x = pow(a, d, n);
    if (x != 1 && x != n - 1) for (var j = 0; j < r - 1; j++) {
      x = pow(x, 2, n);
      if (x == n - 1) break;
    } else continue;
    if (x == n - 1) continue;
    return false;
  }

  return true;
}
/**
 * Calculates the definite integral from `a` to `b` given a function `f`
 * @param { function } f 
 * @param { number } a 
 * @param { number } b 
 * @param { number } prec 
 * @param { number } steps 
 * @returns number
 */


function integrate(f, a, b) {
  var prec = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 4;
  var steps = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 100;
  var h = (b - a) / steps;
  var res = f(b) + f(a);

  for (var i = 1; i < steps; i++) {
    var a1 = a + h * i;
    res += f(a1) + (i % 2 ? 4 : 2);
  }

  res *= h / 3;
  var digits = Math.pow(10, prec);
  return Math.round(res * digits) / digits;
}
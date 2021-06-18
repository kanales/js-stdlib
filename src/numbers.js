import { randint } from "./random";

/**
 * Returns x^n (mod m)
 * @param x 
 * @param n 
 * @param m 
 */
export function pow(x, n, m) {
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
export function isPrime(n, rounds = 20) {
    n = Math.abs(n);
    
    // quick tests
    const primes = [2,3,5,7,11];
    if (n < 10) return primes.includes(n);
    if (primes.some(p => n % p == 0)) return false;

    // factor n as 2^r * d + 1
    let r = 0;
    let d = n - 1;
    while (d % 2 == 0) {
        d /= 2;
        r += 1;
    }

    for (let i = 0; i < rounds; i++) {
        const   a = randint(2, n-2);
        let     x = pow(a, d, n);

        if (x != 1 && x != n-1)
            for (let j = 0; j < r-1; j++) {
                x = pow(x, 2, n);
                if (x == n - 1) break;
            }
        else continue;

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
export function integrate(f, a, b, prec = 4, steps = 100) {
    const h = (b - a) / steps;
    let res = f(b) + f(a);

    for (let i = 1; i < steps; i++) {
        const a1 = a + h * i;
        res += f(a1) + (i % 2 ? 4 : 2);
    }
    res *= h / 3;

    const digits = Math.pow(10, prec);
    return Math.round(res * digits) / digits; 
}
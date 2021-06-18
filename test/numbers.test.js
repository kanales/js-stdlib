import { isPrime } from "../src/numbers";

it("checks for primality", () => {
    const primes = [283, 467, 577, 1619, 1823, 811, 419, 643, 1823, 1181];
    const comps  = [508, 935, 288, 1341, 931, 1750, 564, 914, 1256, 1936];

    for (const prime of primes) expect(isPrime(prime)).toBeTruthy();
    for (const comp of comps) expect(isPrime(comp)).toBeFalsy();
});
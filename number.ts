/**
 * @module
 * This module provides functions for working with numbers.
 */

/**
 * @param n
 * @returns boolean indicating whether the number is even
 *
 * @example
 * ```ts
 * isEven(2); // true
 * isEven(3); // false
 * ```
 */
export function isEven(n: number): boolean {
  return n % 2 === 0;
}

/**
 * @param n
 * @returns boolean indicating whether the number is odd
 *
 * @example
 * ```ts
 * isOdd(2); // false
 * isOdd(3); // true
 * ```
 */
export function isOdd(n: number): boolean {
  return !isEven(n);
}

/**
 * @param n
 * @returns boolean indicating whether the number is positive
 *
 * @example
 * ```ts
 * isPositive(2); // true
 * isPositive(-3); // false
 * ```
 */
export function isPositive(n: number): boolean {
  return n > 0;
}

/**
 * @param n
 * @returns boolean indicating whether the number is negative
 *
 * @example
 * ```ts
 * isNegative(2); // false
 * isNegative(-3); // true
 * ```
 */
export function isNegative(n: number): boolean {
  return n < 0;
}

/**
 * @param n
 * @returns boolean indicating whether the number is zero
 *
 * @example
 * ```ts
 * isZero(0); // true
 * isZero(3); // false
 * ```
 */
export function isZero(n: number): boolean {
  return n === 0;
}

/**
 * @param numbers
 * @returns the largest of the given numbers
 *
 * @example
 * ```ts
 * max(2, 3, 4); // 4
 * max(2, 3, 4, 1); // 4
 * ```
 */
export function max(...numbers: number[]): number {
  return numbers.length ? Math.max(...numbers) : NaN;
}

/**
 * @param numbers
 * @returns the smallest of the given numbers
 *
 * @example
 * ```ts
 * min(2, 3, 4); // 2
 * min(2, 3, 4, 1); // 1
 * ```
 */
export function min(...numbers: number[]): number {
  return numbers.length ? Math.min(...numbers) : NaN;
}

/**
 * @param numbers
 * @returns the sum of the given numbers
 *
 * @example
 * ```ts
 * sum(2, 3, 4); // 9
 * sum(2, 3, 4, 1); // 10
 * ```
 */
export function sum(...numbers: number[]): number {
  return numbers.reduce((acc, n) => acc + n, 0);
}

/**
 * @param numbers
 * @returns the average of the given numbers
 *
 * @example
 * ```ts
 * average(2, 3, 4); // 3
 * average(2, 3, 4, 1); // 2.5
 * ```
 */
export function average(...numbers: number[]): number {
  return sum(...numbers) / numbers.length;
}

/**
 * @param numbers
 * @returns the median of the given numbers
 *
 * @example
 * ```ts
 * median(2, 3, 4); // 3
 * median(2, 3, 4, 1); // 2.5
 * ```
 */
export function median(...numbers: number[]): number {
  const sorted = numbers.sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return isEven(sorted.length)
    ? average(sorted[middle - 1], sorted[middle])
    : sorted[middle];
}

/**
 * @param n
 * @returns the factorial of the given number
 *
 * @example
 * ```ts
 * factorial(5); // 120
 * factorial(0); // 1
 * ```
 */
export function factorial(n: number): number {
  return n < 0 ? NaN : n === 0 ? 1 : n * factorial(n - 1);
}

/**
 * @param n
 * @returns the fibonacci number at the given index
 *
 * @example
 * ```ts
 * fibonacci(5); // 5
 * fibonacci(0); // 0
 * ```
 */
export function fibonacci(n: number): number {
  return n < 0 ? NaN : n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * @param n
 * @returns boolean indicating whether the number is prime
 *
 * @example
 * ```ts
 * isPrime(2); // true
 * isPrime(4); // false
 * ```
 */
export function isPrime(n: number): boolean {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

/**
 * @param n
 * @returns boolean indicating whether the number is perfect
 *
 * @example
 * ```ts
 * isPerfect(6); // true
 * isPerfect(4); // false
 * ```
 */
export function isPerfect(n: number): boolean {
  return n === sum(...getDivisors(n));
}

/**
 * @param n
 * @returns the divisors of the given number
 *
 * @example
 * ```ts
 * getDivisors(6); // [1, 2, 3]
 * getDivisors(4); // [1, 2]
 * ```
 */
export function getDivisors(n: number): number[] {
  const divisors = [];
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) divisors.push(i);
  }
  return divisors;
}

/**
 * @param n
 * @returns the prime factors of the given number
 *
 * @example
 * ```ts
 * getPrimeFactors(6); // [2, 3]
 * getPrimeFactors(4); // [2, 2]
 * ```
 */
export function getPrimeFactors(n: number): number[] {
  const factors = [];
  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  }
  return factors;
}

/**
 * @param n
 * @returns the ordinal of the given number
 *
 * @example
 * ```ts
 * toOrdinal(1); // 1st
 * toOrdinal(2); // 2nd
 * ```
 */
export function toOrdinal(n: number): string {
  const suffixes = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
}

/**
 * @param n
 * @returns the number in words
 *
 * @example
 * ```ts
 * toWords(123); // one two three
 * toWords(456); // four five six
 * ```
 */
export function toWords(n: number): string {
  const words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  return n.toString().split("").map((d) => words[parseInt(d)]).join(" ");
}

/**
 * @param min
 * @param max
 * @returns a random number between the given range
 *
 * @example
 * ```ts
 * random(1, 10); // 5.12342
 */
export function random(min = 0, max = 1): number {
  return Math.random() * (max - min) + min;
}

/**
 * @param min
 * @param max
 * @returns a random integer between the given range
 *
 * @example
 * ```ts
 * randomInt(1, 10); // 5
 */
export function randomInt(min = 0, max = 1): number {
  return Math.floor(random(min, max));
}

/**
 * @param n
 * @param m
 * @returns the modulo of the given numbers
 *
 * @example
 * ```ts
 * mod(5, 3); // 2
 * mod(-5, 3); // 1
 * ```
 */
export function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

/**
 * @param n
 * @param minN
 * @param maxN
 * @returns the clamped number
 *
 * @example
 * ```ts
 * clamp(5, 1, 10); // 5
 * clamp(0, 1, 10); // 1
 * clamp(15, 1, 10); // 10
 * ```
 */
export function clamp(n: number, minN: number, maxN: number): number {
  return min(max(n, minN), maxN);
}

/**
 * @param n
 * @param start
 * @param end
 * @returns boolean indicating whether the number is in the range
 *
 * @example
 * ```ts
 * inRange(5, 1, 10); // true
 * inRange(0, 1, 10); // false
 * inRange(15, 1, 10); // false
 * ```
 */
export function inRange(n: number, start: number, end: number): boolean {
  return start <= n && n < end;
}

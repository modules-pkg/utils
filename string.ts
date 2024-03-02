/**
 * This module provides functions for working with strings.
 * @module
 */

/**
 * @param str
 * @param prefix
 * @returns str without the prefix
 *
 * @example
 * ```ts
 * removePrefix("hello world", "hello "); // "world"
 * ```
 */
export function removePrefix(str: string, prefix: string): string {
  if (str.startsWith(prefix)) {
    return str.slice(prefix.length);
  }
  return str;
}

/**
 * @param str
 * @param suffix
 * @returns str without the suffix
 *
 * @example
 * ```ts
 * removeSuffix("hello world", " world"); // "hello"
 * ```
 */
export function removeSuffix(str: string, suffix: string): string {
  if (str.endsWith(suffix)) {
    return str.slice(0, -suffix.length);
  }
  return str;
}

/**
 * @param str
 * @return str with the first character capitalized
 *
 * @example
 * ```ts
 * capitalize("hello world"); // "Hello world"
 * ```
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * @param str
 * @returns str with the first character lowercased
 *
 * @example
 * ```ts
 * camelCase("HelloWorld"); // "helloWorld"
 * ```
 */
export function camelCase(str: string): string {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

/**
 * @param str
 * @returns str in kebab-case
 *
 * @example
 * ```ts
 * kebabCase("hello world"); // "hello-world"
 * ```
 */
export function kebabCase(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

/**
 * @param str
 * @returns str in snake_case
 *
 * @example
 * ```ts
 * snakeCase("hello world"); // "hello_world"
 * ```
 */
export function snakeCase(str: string): string {
  return kebabCase(str).replace(/-/g, "_");
}

/**
 * @param str
 * @returns str in PascalCase
 *
 * @example
 * ```ts
 * pascalCase("hello world"); // "HelloWorld"
 * ```
 */
export function pascalCase(str: string): string {
  return capitalize(camelCase(str));
}

/**
 * @param str
 * @returns str in CONSTANT_CASE
 *
 * @example
 * ```ts
 * constantCase("hello world"); // "HELLO_WORLD"
 * ```
 */
export function constantCase(str: string): string {
  return snakeCase(str).toUpperCase();
}

/**
 * @param str
 * @returns str in Title Case
 *
 * @example
 * ```ts
 * titleCase("hello world"); // "Hello World"
 * ```
 */
export function titleCase(str: string): string {
  return str
    .split(" ")
    .map((word) => capitalize(word))
    .join(" ");
}

/**
 * @param str
 * @returns reversed str
 *
 * @example
 * ```ts
 * reverse("hello world"); // "dlrow olleh"
 * ```
 */
export function reverse(str: string): string {
  return str.split("").reverse().join("");
}

/**
 * @param str
 * @param maxLength
 * @param suffix
 * @returns str truncated to maxLength with suffix appended
 *
 * @example
 * ```ts
 * truncate("hello world", 5); // "hello..."
 * ```
 */
export function truncate(
  str: string,
  maxLength: number,
  suffix = "...",
): string {
  if (str.length > maxLength) {
    return str.slice(0, maxLength - suffix.length) + suffix;
  }
  return str;
}

/**
 * @param str
 * @returns str with extra whitespace removed
 *
 * @example
 * ```ts
 * normalizeWhitespace("hello  world"); // "hello world"
 * ```
 */
export function normalizeWhitespace(str: string): string {
  return str.replace(/\s+/g, " ");
}

/**
 * @param str
 * @returns str with spaces removed
 *
 * @example
 * ```ts
 * removeWhitespace("hello world"); // "helloworld"
 * ```
 */
export function removeWhitespace(str: string): string {
  return str.replace(/\s+/g, "");
}

/**
 * @param str
 * @returns str with extra whitespace removed
 *
 * @example
 * ```ts
 * removeExtraWhitespace(" hello  world "); // "hello world"
 * ```
 */
export function removeExtraWhitespace(str: string): string {
  return str.trim().replace(/\s+/g, " ");
}

/**
 * @param str
 * @returns str with non-alphanumeric characters removed
 *
 * @example
 * ```ts
 * removeNonAlphaNumeric("hello world!"); // "helloworld"
 * ```
 */
export function removeNonAlphaNumeric(str: string): string {
  return str.replace(/[^a-zA-Z0-9]/g, "");
}

/**
 * @param str
 * @returns str with non-numeric characters removed
 *
 * @example
 * ```ts
 * removeNonNumeric("hello 123 world!"); // "123"
 * ```
 */
export function removeNonNumeric(str: string): string {
  return str.replace(/[^0-9]/g, "");
}

/**
 * @param str
 * @returns str with non-alpha characters removed
 *
 * @example
 * ```ts
 * removeNonAlpha("hello 123 world!"); // "helloworld"
 * ```
 */
export function removeNonAlpha(str: string): string {
  return str.replace(/[^a-zA-Z]/g, "");
}

/**
 * @param str
 * @param maskChar
 * @returns str with all characters replaced with maskChar
 *
 * @example
 * ```ts
 * mask("hello world"); // "***********"
 * ```
 */
export function mask(str: string, maskChar = "*"): string {
  return str.replace(/./g, maskChar);
}

/**
 * @param str
 * @returns xss safe string
 *
 * @example
 * ```ts
 * xssSafe("<script>alert('hello world')</script>"); // "&lt;script&gt;alert('hello world')&lt;/script&gt;"
 * ```
 */
export function xssSafe(str: string): string {
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/**
 * @param str
 * @returns html safe string
 *
 * @example
 * ```ts
 * htmlSafe("<script>alert('hello world')</script>"); // "&lt;script&gt;alert('hello world')&lt;/script&gt;"
 * ```
 */
export function htmlSafe(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/**
 * @param str
 * @returns str with html tags removed
 *
 * @example
 * ```ts
 * removeHtmlTags("<p>hello world</p>"); // "hello world"
 * ```
 */
export function removeHtmlTags(str: string): string {
  return str.replace(/<[^>]*>/g, "");
}

/**
 * @param str
 * @param args - strings to replace placeholders
 * @returns formatted string
 *
 * @example
 * ```ts
 * format("hello {0}", "world"); // "hello world"
 * ```
 */
export function format(str: string, ...args: string[]): string {
  return str.replace(/{(\d+)}/g, (_match, index) => args[index] || "");
}

/**
 * @param str
 * @param args - strings to replace placeholders
 * @returns formatted string
 *
 * @example
 * ```ts
 * formatNamed("hello {name}", { name: "world" }); // "hello world"
 * ```
 */
export function formatNamed(str: string, args: Record<string, string>): string {
  return str.replace(/{([^{}]*)}/g, (_match, key) => args[key] || "");
}

/**
 * @param str
 * @param subStr
 * @returns number of occurrences of subStr in str
 *
 * @example
 * ```ts
 * totalOccurrences("hello world", "l"); // 3
 * ```
 */
export function totalOccurrences(str: string, subStr: string): number {
  return str.split(subStr).length - 1;
}

/**
 * @param str
 * @returns boolean indicating if str is a palindrome
 *
 * @example
 * ```ts
 * isPalindrome("hello world"); // false
 * isPalindrome("racecar"); // true
 * ```
 */
export function isPalindrome(str: string): boolean {
  return str === reverse(str);
}

/**
 * @param str1
 * @param str2
 * @returns boolean indicating if str1 and str2 are anagrams
 *
 * @example
 * ```ts
 * isAnagram("hello", "world"); // false
 * isAnagram("listen", "silent"); // true
 * ```
 */
export function isAnagram(str1: string, str2: string): boolean {
  return str1.split("").sort().join() === str2.split("").sort().join();
}

/**
 * @param str
 * @returns boolean indicating if str is numeric
 *
 * @example
 * ```ts
 * isNumeric("hello world"); // false
 * isNumeric("123"); // true
 * ```
 */
export function isNumeric(str: string): boolean {
  return !isNaN(+str);
}

/**
 * @param str
 * @returns boolean indicating if str is alphabetic
 *
 * @example
 * ```ts
 * isAlpha("hello world"); // false
 * isAlpha("hello"); // true
 * ```
 */
export function isAlpha(str: string): boolean {
  return /^[a-zA-Z]+$/.test(str);
}

/**
 * @param str
 * @returns boolean indicating if str is alphanumeric
 *
 * @example
 * ```ts
 * isAlphaNumeric("hello world"); // false
 * isAlphaNumeric("hello123"); // true
 * ```
 */
export function isAlphaNumeric(str: string): boolean {
  return /^[a-zA-Z0-9]+$/.test(str);
}

/**
 * @param str
 * @returns boolean indicating if str is lowercase
 *
 * @example
 * ```ts
 * isLowerCase("Hello world"); // false
 * isLowerCase("hello"); // true
 * ```
 */
export function isLowerCase(str: string): boolean {
  return str === str.toLowerCase();
}

/**
 * @param str
 * @returns boolean indicating if str is uppercase
 *
 * @example
 * ```ts
 * isUpperCase("Hello world"); // false
 * isUpperCase("HELLO"); // true
 * ```
 */
export function isUpperCase(str: string): boolean {
  return str === str.toUpperCase();
}

/**
 * @param str
 * @returns boolean indicating if str is title case
 *
 * @example
 * ```ts
 * isTitleCase("hello world"); // false
 * isTitleCase("Hello World"); // true
 * ```
 */
export function isTitleCase(str: string): boolean {
  return str === titleCase(str);
}

/**
 * @param str
 * @returns boolean indicating if str is camel case
 *
 * @example
 * ```ts
 * isCamelCase("helloWorld"); // true
 * isCamelCase("hello-world"); // false
 * ```
 */
export function isCamelCase(str: string): boolean {
  return str === camelCase(str);
}

/**
 * @param str
 * @returns boolean indicating if str is pascal case
 *
 * @example
 * ```ts
 * isPascalCase("HelloWorld"); // true
 * isPascalCase("hello-world"); // false
 * ```
 */
export function isPascalCase(str: string): boolean {
  return str === pascalCase(str);
}

/**
 * @param str
 * @returns boolean indicating if str is kebab case
 *
 * @example
 * ```ts
 * isKebabCase("hello-world"); // true
 * isKebabCase("hello_world"); // false
 * ```
 */
export function isKebabCase(str: string): boolean {
  return str === kebabCase(str);
}

/**
 * @param str
 * @returns boolean indicating if str is snake case
 *
 * @example
 * ```ts
 * isSnakeCase("hello_world"); // true
 * isSnakeCase("hello-world"); // false
 * ```
 */
export function isSnakeCase(str: string): boolean {
  return str === snakeCase(str);
}

/**
 * @param str
 * @returns boolean indicating if str is constant case
 *
 * @example
 * ```ts
 * isConstantCase("HELLO_WORLD"); // true
 * isConstantCase("hello_world"); // false
 * ```
 */
export function isConstantCase(str: string): boolean {
  return str === constantCase(str);
}

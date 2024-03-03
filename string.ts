/**
 * @module string
 * This module provides functions for working with strings.
 */

/**
 * This function returns the string without the prefix.
 *
 * @example
 * ```ts
 * removePrefix("hello world", "hello "); // "world"
 * ```
 *
 * @param str
 * @param prefix
 * @returns str without the prefix
 */
export function removePrefix(str: string, prefix: string): string {
  if (str.startsWith(prefix)) {
    return str.slice(prefix.length);
  }
  return str;
}

/**
 * This function returns the string without the suffix.
 *
 * @example
 * ```ts
 * removeSuffix("hello world", " world"); // "hello"
 * ```
 *
 * @param str
 * @param suffix
 * @returns str without the suffix
 */
export function removeSuffix(str: string, suffix: string): string {
  if (str.endsWith(suffix)) {
    return str.slice(0, -suffix.length);
  }
  return str;
}

/**
 * This function returns the string with the first character capitalized.
 *
 * @example
 * ```ts
 * capitalize("hello world"); // "Hello world"
 * ```
 *
 * @param str
 * @return str with the first character capitalized
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * This function returns the string in camelCase.
 *
 * @example
 * ```ts
 * camelCase("HelloWorld"); // "helloWorld"
 * ```
 *
 * @param str
 * @returns str with the first character lowercased
 */
export function camelCase(str: string): string {
  return str.replace(/-([a-z])/g, (g) => g[1]!.toUpperCase());
}

/**
 * This function returns the string in kebab-case.
 *
 * @example
 * ```ts
 * kebabCase("hello world"); // "hello-world"
 * ```
 *
 * @param str
 * @returns str in kebab-case
 */
export function kebabCase(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

/**
 * This function returns the string in snake_case.
 *
 * @example
 * ```ts
 * snakeCase("hello world"); // "hello_world"
 * ```
 *
 * @param str
 * @returns str in snake_case
 */
export function snakeCase(str: string): string {
  return kebabCase(str).replace(/-/g, "_");
}

/**
 * This function returns the string in PascalCase.
 *
 * @example
 * ```ts
 * pascalCase("hello world"); // "HelloWorld"
 * ```
 *
 * @param str
 * @returns str in PascalCase
 */
export function pascalCase(str: string): string {
  return capitalize(camelCase(str));
}

/**
 * This function returns the string in CONSTANT_CASE.
 *
 * @example
 * ```ts
 * constantCase("hello world"); // "HELLO_WORLD"
 * ```
 *
 * @param str
 * @returns str in CONSTANT_CASE
 */
export function constantCase(str: string): string {
  return snakeCase(str).toUpperCase();
}

/**
 * This function returns the string in Title Case.
 *
 * @example
 * ```ts
 * titleCase("hello world"); // "Hello World"
 * ```
 *
 * @param str
 * @returns str in Title Case
 */
export function titleCase(str: string): string {
  return str
    .split(" ")
    .map((word) => capitalize(word))
    .join(" ");
}

/**
 * This function returns the string in reverse.
 *
 * @example
 * ```ts
 * reverse("hello world"); // "dlrow olleh"
 * ```
 *
 * @param str
 * @returns reversed str
 */
export function reverse(str: string): string {
  return str.split("").reverse().join("");
}

/**
 * This function returns the string truncated to maxLength with suffix appended.
 *
 * @example
 * ```ts
 * truncate("hello world", 5); // "hello..."
 * ```
 *
 * @param str
 * @param maxLength
 * @param suffix
 * @returns str truncated to maxLength with suffix appended
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
 * This function returns the string with extra whitespace removed.
 *
 * @example
 * ```ts
 * normalizeWhitespace("hello  world"); // "hello world"
 * ```
 *
 * @param str
 * @returns str with extra whitespace removed
 */
export function normalizeWhitespace(str: string): string {
  return str.replace(/\s+/g, " ");
}

/**
 * This function returns the string with whitespace removed.
 *
 * @example
 * ```ts
 * removeWhitespace("hello world"); // "helloworld"
 * ```
 *
 * @param str
 * @returns str with spaces removed
 */
export function removeWhitespace(str: string): string {
  return str.replace(/\s+/g, "");
}

/**
 * This function returns the string with extra whitespace removed.
 *
 * @example
 * ```ts
 * removeExtraWhitespace(" hello  world "); // "hello world"
 * ```
 *
 * @param str
 * @returns str with extra whitespace removed
 */
export function removeExtraWhitespace(str: string): string {
  return str.trim().replace(/\s+/g, " ");
}

/**
 * This function returns the string with non-alphanumeric characters removed.
 *
 * @example
 * ```ts
 * removeNonAlphaNumeric("hello world!"); // "helloworld"
 * ```
 *
 * @param str
 * @returns str with non-alphanumeric characters removed
 */
export function removeNonAlphaNumeric(str: string): string {
  return str.replace(/[^a-zA-Z0-9]/g, "");
}

/**
 * This function returns the string with non-numeric characters removed.
 *
 * @example
 * ```ts
 * removeNonNumeric("hello 123 world!"); // "123"
 * ```
 *
 * @param str
 * @returns str with non-numeric characters removed
 */
export function removeNonNumeric(str: string): string {
  return str.replace(/[^0-9]/g, "");
}

/**
 * This function returns the string with non-alpha characters removed.
 *
 * @example
 * ```ts
 * removeNonAlpha("hello 123 world!"); // "helloworld"
 * ```
 *
 * @param str
 * @returns str with non-alpha characters removed
 */
export function removeNonAlpha(str: string): string {
  return str.replace(/[^a-zA-Z]/g, "");
}

/**
 * This function returns the string with all characters replaced with maskChar.
 *
 * @example
 * ```ts
 * mask("hello world"); // "***********"
 * ```
 *
 * @param str
 * @param maskChar
 * @returns str with all characters replaced with maskChar
 */
export function mask(str: string, maskChar = "*"): string {
  return str.replace(/./g, maskChar);
}

/**
 * This function returns a xss safe string.
 *
 * @example
 * ```ts
 * xssSafe("<script>alert('hello world')</script>"); // "&lt;script&gt;alert('hello world')&lt;/script&gt;"
 * ```
 *
 * @param str
 * @returns xss safe string
 */
export function xssSafe(str: string): string {
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/**
 * This function returns a html safe string.
 *
 * @example
 * ```ts
 * htmlSafe("<script>alert('hello world')</script>"); // "&lt;script&gt;alert('hello world')&lt;/script&gt;"
 * ```
 *
 * @param str
 * @returns html safe string
 */
export function htmlSafe(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/**
 * This function returns a string with html tags removed.
 *
 * @example
 * ```ts
 * removeHtmlTags("<p>hello world</p>"); // "hello world"
 * ```
 *
 * @param str
 * @returns str with html tags removed
 */
export function removeHtmlTags(str: string): string {
  return str.replace(/<[^>]*>/g, "");
}

/**
 * This function returns a formatted string.
 *
 * @example
 * ```ts
 * format("hello {0}", "world"); // "hello world"
 * ```
 *
 * @param str
 * @param args - strings to replace placeholders
 * @returns formatted string
 */
export function format(str: string, ...args: string[]): string {
  return str.replace(/{(\d+)}/g, (_match, index) => args[index] || "");
}

/**
 * This function returns a formatted string.
 *
 * @example
 * ```ts
 * formatNamed("hello {name}", { name: "world" }); // "hello world"
 * ```
 *
 * @param str
 * @param args - strings to replace placeholders
 * @returns formatted string
 */
export function formatNamed(str: string, args: Record<string, string>): string {
  return str.replace(/{([^{}]*)}/g, (_match, key) => args[key] || "");
}

/**
 * This function returns the total occurrences of subStr in str.
 *
 * @example
 * ```ts
 * totalOccurrences("hello world", "l"); // 3
 * ```
 *
 * @param str
 * @param subStr
 * @returns number of occurrences of subStr in str
 */
export function totalOccurrences(str: string, subStr: string): number {
  return str.split(subStr).length - 1;
}

/**
 * This function returns a boolean indicating if str is a palindrome.
 *
 * @example
 * ```ts
 * isPalindrome("hello world"); // false
 * isPalindrome("racecar"); // true
 * ```
 *
 * @param str
 * @returns boolean indicating if str is a palindrome
 */
export function isPalindrome(str: string): boolean {
  return str === reverse(str);
}

/**
 * This function returns a boolean indicating if str1 and str2 are anagrams.
 *
 * @example
 * ```ts
 * isAnagram("hello", "world"); // false
 * isAnagram("listen", "silent"); // true
 * ```
 *
 * @param str1
 * @param str2
 * @returns boolean indicating if str1 and str2 are anagrams
 */
export function isAnagram(str1: string, str2: string): boolean {
  return str1.split("").sort().join() === str2.split("").sort().join();
}

/**
 * This function returns a boolean indicating if str is numeric.
 *
 * @example
 * ```ts
 * isNumeric("hello world"); // false
 * isNumeric("123"); // true
 * ```
 *
 * @param str
 * @returns boolean indicating if str is numeric
 */
export function isNumeric(str: string): boolean {
  return !isNaN(+str);
}

/**
 * This function returns a boolean indicating if str is alphabetic.
 *
 * @example
 * ```ts
 * isAlpha("hello world"); // false
 * isAlpha("hello"); // true
 * ```
 *
 * @param str
 * @returns boolean indicating if str is alphabetic
 */
export function isAlpha(str: string): boolean {
  return /^[a-zA-Z]+$/.test(str);
}

/**
 * This function returns a boolean indicating if str is alphanumeric.
 *
 * @example
 * ```ts
 * isAlphaNumeric("hello world"); // false
 * isAlphaNumeric("hello123"); // true
 * ```
 *
 * @param str
 * @returns boolean indicating if str is alphanumeric
 */
export function isAlphaNumeric(str: string): boolean {
  return /^[a-zA-Z0-9]+$/.test(str);
}

/**
 * This function returns a boolean indicating if str is lowercase.
 *
 * @example
 * ```ts
 * isLowerCase("Hello world"); // false
 * isLowerCase("hello"); // true
 * ```
 *
 * @param str
 * @returns boolean indicating if str is lowercase
 */
export function isLowerCase(str: string): boolean {
  return str === str.toLowerCase();
}

/**
 * This function returns a boolean indicating if str is uppercase.
 *
 * @example
 * ```ts
 * isUpperCase("Hello world"); // false
 * isUpperCase("HELLO"); // true
 * ```
 *
 * @param str
 * @returns boolean indicating if str is uppercase
 */
export function isUpperCase(str: string): boolean {
  return str === str.toUpperCase();
}

/**
 * This function returns a boolean indicating if str is title case.
 *
 * @example
 * ```ts
 * isTitleCase("hello world"); // false
 * isTitleCase("Hello World"); // true
 * ```
 *
 * @param str
 * @returns boolean indicating if str is title case
 */
export function isTitleCase(str: string): boolean {
  return str === titleCase(str);
}

/**
 * This function returns a boolean indicating if str is camel case.
 *
 * @example
 * ```ts
 * isCamelCase("helloWorld"); // true
 * isCamelCase("hello-world"); // false
 * ```
 *
 * @param str
 * @returns boolean indicating if str is camel case
 */
export function isCamelCase(str: string): boolean {
  return str === camelCase(str);
}

/**
 * This function returns a boolean indicating if str is pascal case.
 *
 * @example
 * ```ts
 * isPascalCase("HelloWorld"); // true
 * isPascalCase("hello-world"); // false
 * ```
 *
 * @param str
 * @returns boolean indicating if str is pascal case
 */
export function isPascalCase(str: string): boolean {
  return str === pascalCase(str);
}

/**
 * This function returns a boolean indicating if str is kebab case.
 *
 * @example
 * ```ts
 * isKebabCase("hello-world"); // true
 * isKebabCase("hello_world"); // false
 * ```
 *
 * @param str
 * @returns boolean indicating if str is kebab case
 */
export function isKebabCase(str: string): boolean {
  return str === kebabCase(str);
}

/**
 * This function returns a boolean indicating if str is snake case.
 *
 * @example
 * ```ts
 * isSnakeCase("hello_world"); // true
 * isSnakeCase("hello-world"); // false
 * ```
 *
 * @param str
 * @returns boolean indicating if str is snake case
 */
export function isSnakeCase(str: string): boolean {
  return str === snakeCase(str);
}

/**
 * This function returns a boolean indicating if str is constant case.
 *
 * @example
 * ```ts
 * isConstantCase("HELLO_WORLD"); // true
 * isConstantCase("hello_world"); // false
 * ```
 *
 * @param str
 * @returns boolean indicating if str is constant case
 */
export function isConstantCase(str: string): boolean {
  return str === constantCase(str);
}

import normalize from './_normalizeCase.js'

/**
 * Converts `str` to
 * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
 *
 * @param {string} [str=''] The string to convert.
 * @returns {string} Returns the start cased string.
 */
export default function startCase (str) {
  return normalize(str).map((part) => (part.charAt(0).toUpperCase() + part.slice(1))).join(' ')
}

import normalize from './_normalizeCase.js'

/**
 * Converts `str` to
 * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 *
 * @param {string} [str=''] The string to convert.
 * @returns {string} Returns the kebab cased string.
 */
export default function kebabCase (str) {
  return normalize(str).join('-')
}

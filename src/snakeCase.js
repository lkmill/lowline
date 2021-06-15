import normalize from './_normalizeCase.js'

/**
 * Converts `str` to
 * [snake case](https://en.wikipedia.org/wiki/Snake_case).
 *
 * @param {string} [str=''] The string to convert.
 * @returns {string} Returns the snake cased string.
 */
export default function snakeCase (str) {
  return normalize(str).join('_')
}

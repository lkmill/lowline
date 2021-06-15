import normalize from './_normalizeCase.js'

/**
 * Converts `str` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @param {string} [str=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 */
export default function camelCase (str) {
  const arr = normalize(str)

  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
  }

  return arr.join('')
}

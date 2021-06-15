import omitBy from './omitBy.js'

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @param {Object} object The source object.
 * @param {...(string|string[])} paths The property paths to omit.
 * @returns {Object} Returns the new object.
 */
export default function omit(object, ...paths) {
  const omit = paths.some((arg) => Array.isArray(arg)) ? (paths.length === 1 ? paths[0] : [].concat(...paths)) : paths

  return omitBy(object, (_, key) => omit.includes(key))
}

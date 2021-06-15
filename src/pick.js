/**
 * Creates an object composed of the picked `object` properties.
 *
 * @param {Object} object The source object.
 * @param {...(string|string[])} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 */
export default function pick(object, ...paths) {
  const pick = paths.some((path) => Array.isArray(path)) ? (paths.length === 1 ? paths[0] : [].concat(...paths)) : paths

  const result = {}

  for (const key of pick) {
    if (key in object) result[key] = object[key]
  }

  return result
}

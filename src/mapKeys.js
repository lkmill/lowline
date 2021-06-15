/**
 * @param {Object} obj
 * @param {(value: any, key: string) => string} fnc
 * @returns {Object}
 */
export default function mapKeys(obj, fnc) {
  return Object.keys(obj).reduce((result, key) => {
    result[fnc(obj[key], key, obj)] = obj[key]

    return result
  }, {})
}

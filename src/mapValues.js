/**
 * @param {Object} obj
 * @param {(value: any, key: string) => any} fnc
 * @returns {Object}
 */
export default function mapValues (obj, fnc) {
  return Object.keys(obj).reduce((result, key) => {
    result[key] = fnc(obj[key], key, obj)

    return result
  }, {})
}

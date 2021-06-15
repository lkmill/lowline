import identity from './identity.js'
import isPrototype from './_isPrototype.js'

/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 *
 * @param {Object} object The source object.
 * @param {(value: any, key: string) => boolean} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 */
export default function pickBy(object, predicate = identity) {
  const result = {}

  for (const key in object) {
    if (
      (key !== 'constructor' || !isPrototype(object) || hasOwnProperty.call(object, key)) &&
      predicate(object[key], key)
    ) {
      result[key] = object[key]
    }
  }

  return result
}

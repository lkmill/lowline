import identity from './identity.js'
import pickBy from './pickBy.js'

/**
 * The opposite of `_.pickBy`; this method creates an object composed of
 * the own and inherited enumerable string keyed properties of `object` that
 * `predicate` doesn't return truthy for. The predicate is invoked with two
 * arguments: (value, key).
 *
 * @param {Object} object The source object.
 * @param {(value: any, key: string) => boolean} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 */
export default function omitBy(object, predicate = identity) {
  return pickBy(object, (value, key) => !predicate(value, key))
}

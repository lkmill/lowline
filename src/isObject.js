/**
 * http://stackoverflow.com/a/34749873
 *
 * Simple object check.
 * @param item
 * @returns {boolean}
 */

export default function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

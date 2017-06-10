export default function reduce (list, iterator, result) {
  if (typeof iterator !== 'function') {
    throw new TypeError('iterator must be a function')
  }

  if (typeof list === 'string') {
    list = Array.from(list)
  }

  if (Array.isArray(list)) {
    return list.reduce(iterator)
  }

  return Object.keys(list).reduce((result, key) => iterator(result, list[key], key, list), result)
}

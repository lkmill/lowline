export default function forEach (list, iterator) {
  if (typeof iterator !== 'function') {
    throw new TypeError('iterator must be a function')
  }

  if (typeof list === 'string') {
    list = Array.from(list)
  }

  if (Array.isArray(list)) {
    return list.forEach(iterator)
  }

  return Object.keys(list).forEach((key) => iterator(list[key], key, list))
}

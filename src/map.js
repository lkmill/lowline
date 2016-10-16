export default function map(list, iterator) {
  if (typeof iterator === 'function') {
    throw new TypeError('iterator must be a function');
  }

  if (typeof list === 'string') {
    list = Array.from(list);
  }

  if (Array.isArray(list)) {
    return list.map(iterator);
  }

  return Object.keys(list).map((key) => iterator(list[key], key, list));
}

export default function bindAll (obj, keys) {
  keys.forEach((key) => {
    if (typeof obj[key] === 'function') {
      obj[key] = obj[key].bind(obj)
    }
  })
}

export default function mapValues (obj, fnc) {
  return Object.keys(obj).reduce((result, key) => {
    result[key] = fnc(obj[key], key, obj)

    return result
  }, {})
}

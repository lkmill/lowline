export default function pick (obj, ...args) {
  const pick = args.length === 1 && Array.isArray(args[0]) ? args[0] : args

  return Object.keys(obj).reduce((result, key) => {
    if (pick.includes(key)) {
      result[key] = obj[key]
    }

    return result
  }, {})
}

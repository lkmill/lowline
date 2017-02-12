export default function omit(obj, ...args) {
  const omit = args.length === 1 && Array.isArray(args[0]) ? args[0] : args;

  return Object.keys(obj).reduce((result, key) => {
    if (!omit.includes(key)) {
      result[key] = obj[key];
    }

    return result;
  }, {});
}

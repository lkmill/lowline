export default function omitBy(obj, fnc) {
  return Object.keys(obj).reduce((result, key) => {
    if (!fnc(obj[key])) {
      result[key] = obj[key];
    }

    return result;
  }, {});
}

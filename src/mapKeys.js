export default function mapValues(obj, fnc) {
  return Object.keys(obj).reduce((result, key) => {
    result[fnc(obj[key], key, obj)] = obj[key];

    return result;
  }, {});
}

export default function omit(obj, ...props) {
  return Object.keys(obj).reduce((result, key) => {
    if (!props.includes(key)) {
      result[key] = obj[key];
    }

    return result;
  }, {});
}

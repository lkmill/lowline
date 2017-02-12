export default function result(obj, path, defaultValue) {
  if (!obj || path == null || !path.length) return defaultValue;

  if (typeof path === 'string') {
    path = path.split('.');
  }

  let val = obj;
  let prev;
  let attr;

  while (val && (attr = path.shift()) != null) {
    prev = val;
    val = val[attr];
  }

  if (typeof val === 'function') {
    return val.call(prev);
  } else if (val === undefined) {
    return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
  }

  return val;
}

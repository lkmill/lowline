export default function get(obj, path, defaultValue) {
  if (!obj || path == null || !path.length) return defaultValue;

  if (typeof path === 'string') {
    path = path.split('.');
  }

  let val = obj;
  let attr;

  while (val && (attr = path.shift()) != null) {
    val = val[attr];
  }

  return val === undefined ? defaultValue : val;
}

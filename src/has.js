// currently only supports dot case
export default function has(obj, path) {
  if (!obj || path == null || !path.length) return false;

  if (typeof path === 'string') {
    path = path.split('.');
  }

  let val = obj;
  let attr;

  while (attr = path.shift()) {
    if (val == null || !Object.prototype.hasOwnProperty.call(val, attr)) {
      return false;
    }

    val = val[attr];
  }

  return true;
}

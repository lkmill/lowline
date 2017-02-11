export default function get(obj, path) {
  if (!obj || typeof path !== 'string') return undefined;

  path = path.split('.');

  let val = obj;
  let attr;

  while (val && (attr = path.shift()) != null) {
    val = val[attr];
  }

  return val;
}

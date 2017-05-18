export default function unset(obj, path) {
  if (!obj || typeof path !== 'string') return obj;

  path = path.split('.');

  let attr;
  let ref = obj;

  while (ref && (attr = path.shift()) != null) {
    if (path.length) {
      ref = ref[attr];
    } else {
      delete ref[attr];
    }
  }

  return obj;
}


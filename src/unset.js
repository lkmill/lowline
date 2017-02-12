export default function unset(obj, path) {
  if (!obj || typeof path !== 'string') return;

  path = path.split('.');

  let attr;

  while (obj && (attr = path.shift()) != null) {
    if (path.length) {
      obj = obj[attr];
    } else {
      delete obj[attr];
    }
  }
}


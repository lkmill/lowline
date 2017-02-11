export default function set(obj, path, value) {
  if (!obj || typeof path !== 'string') return;

  path = path.split('.');

  let attr;

  while ((attr = path.shift()) !== null) {
    if (path.length) {
      obj = obj[attr] = {};
    } else {
      obj[attr] = value;
    }
  }
}


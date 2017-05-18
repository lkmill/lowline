import isObject from './isObject';

export default function set(obj, path, value) {
  if (!obj || path == null || !path.length) return obj;

  if (typeof path === 'string') {
    path = path.split('.');
  }

  let attr;
  let ref = obj;

  while ((attr = path.shift()) != null) {
    if (path.length) {
      if (!isObject(ref[attr])) {
        ref[attr] = {};
      }

      ref = ref[attr];
    } else {
      ref[attr] = value;
    }
  }

  return obj;
}


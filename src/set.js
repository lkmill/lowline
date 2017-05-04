import isObject from './isObject';

export default function set(obj, path, value) {
  if (!obj || path == null || !path.length) return;

  if (typeof path === 'string') {
    path = path.split('.');
  }

  let attr;

  while ((attr = path.shift()) != null) {
    if (path.length) {
      if (!isObject(obj[attr])) {
        obj[attr] = {};
      }

      obj = obj[attr];
    } else {
      obj[attr] = value;
    }
  }
}


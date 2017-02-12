import isArrayLike from './isArrayLike';

export default function invokeMap(arr, fnc, ...args) {
  if (!Array.isArray(arr)) {
    if (isArrayLike(arr)) {
      arr = Array.from(arr);
    } else {
      throw new Error('First argument must be an array or array like');
    }
  }

  arr.forEach((obj) => {
    if (!obj || typeof obj[fnc] !== 'function') return;

    obj[fnc](...args);
  });
}

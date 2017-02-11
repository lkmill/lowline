export default function invokeMap(arr, fnc, ...args) {
  if (Array.isArray(arr)) throw new Error('First argument must be an array');

  arr.forEach((obj) => {
    if (!obj || typeof obj[fnc] !== 'function') return;

    obj[fnc](...args);
  });
}

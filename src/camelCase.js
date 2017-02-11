import normalize from './_normalizeCase';

export default function camelCase(str) {
  const arr = normalize(str);

  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  return arr.join('');
}

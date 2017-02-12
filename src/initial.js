export default function initial(arr) {
  if (!arr || !arr.length) return [];

  return arr.slice(0, -1);
}

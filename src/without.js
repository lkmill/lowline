export default function without(arr, ...args) {
  if (!Array.isArray(arr)) {
    arr = Array.from(arr);
  }

  return arr.filter((val) => !args.includes(val));
}

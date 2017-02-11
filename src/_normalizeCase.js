export default function normalize(str) {
  // TODO trim
  let arr = str.split(/[\s-_.]/);

  if (arr.length < 2) {
    // TODO allow other characters eg ÅÄÖ
    const matches = str.match(/([A-Z])/g);
    arr = str.split(/[A-Z]/).map((part, index) => {
      if (index > 0) part = matches[index - 1] + part;

      return part.toLowerCase();
    });
    if (!arr[0]) arr.shift();
  } else {
    arr = arr.map((part) => part.toLowerCase());
  }

  return arr;
}

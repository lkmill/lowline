import normalize from './_normalize';

export default function kebabCase(str) {
  return normalize(str).join('-');
}

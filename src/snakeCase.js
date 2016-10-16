import normalize from './_normalize';

export default function snakeCase(str) {
  return normalize(str).join('_');
}

import normalize from './_normalize';

export default function startCase(str) {
  return normalize(str).map((part) => (part.charAt(0).toUpperCase() + part.slice(1))).join(' ');
}

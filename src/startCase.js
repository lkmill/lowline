import normalize from './_normalizeCase.js'

export default function startCase (str) {
  return normalize(str).map((part) => (part.charAt(0).toUpperCase() + part.slice(1))).join(' ')
}

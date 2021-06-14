import normalize from './_normalizeCase.js'

export default function kebabCase (str) {
  return normalize(str).join('-')
}

import normalize from './_normalizeCase'

export default function kebabCase (str) {
  return normalize(str).join('-')
}

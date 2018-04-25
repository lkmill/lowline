import normalize from './_normalizeCase'

export default function snakeCase (str) {
  return normalize(str).join('_')
}

import normalize from './_normalizeCase.js'

export default function snakeCase (str) {
  return normalize(str).join('_')
}

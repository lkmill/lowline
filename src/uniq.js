import isArrayLike from './isArrayLike.js'

export default function uniq (arr) {
  if (!Array.isArray(arr)) {
    if (!isArrayLike(arr)) {
      return undefined
    }
  }

  return arr.reduce((result, value) => {
    if (!result.includes(value)) {
      result.push(value)
    }

    return result
  }, [])
}

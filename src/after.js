const FUNC_ERROR_TEXT = 'Expected a function'

export default function after (n, func) {
  if (typeof func !== 'function') {
    throw new TypeError(FUNC_ERROR_TEXT)
  }

  return function () {
    if (--n < 1) {
      return func.apply(this, arguments)
    }
  }
}

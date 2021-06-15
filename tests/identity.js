import test from 'tape'
import identity from '../src/identity.js'

test('identity', (t) => {
  t.equal(identity(null), null, 'returns null')

  const obj = {}

  t.equal(identity(obj), obj, 'returns object')

  t.equal(identity(undefined), undefined, 'returns undefined')

  t.end()
})

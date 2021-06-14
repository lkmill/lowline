import test from 'tape'
import set from '../src/set.js'

test('set', (t) => {
  const obj = {}

  set(obj, 'a.b.c', 1)
  set(obj, 'a.c.c', 2)
  set(obj, ['a', 'd', 'c'], 'array')
  t.deepEqual(obj, {
    a: {
      b: {
        c: 1,
      },
      c: {
        c: 2,
      },
      d: {
        c: 'array',
      },
    },
  })
  t.end()
})

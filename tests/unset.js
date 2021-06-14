import test from 'tape'
import unset from '../src/unset.js'

test('unset', (t) => {
  const obj = {
    a: {
      b: {
        c1: 'one',
        c2: 'two',
      },
    },
    b: {
      c: 'only',
    },
  }

  unset(obj, 'a.b.c1')

  t.equal(obj.a.b.c1, undefined)

  unset(obj, 'b.c')

  t.equal(obj.a.b.c, undefined)

  unset(obj, 'a')

  t.end(obj.a, undefined)
})

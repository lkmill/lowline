import test from 'tape'
import has from '../src/has.js'

// console.log(has({ test: 'string' }, 'test'));
test('has', (t) => {
  const obj = {
    a: {
      b: {
        c: {
          d: 'string',
        },
      },
      u: undefined,
    },
  }

  t.ok(has(obj, 'a.u'))
  t.ok(!has(obj, 'a.u.s'))
  t.end()
})

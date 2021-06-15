import test from 'tape'
import omit from '../src/omit.js'

test('omit', (t) => {
  const obj = {
    p0: 'value 0',
    p1: 'value 1',
    p2: 'value 2',
    p3: 'value 3',
    p4: 'value 4',
    p5: 'value 5',
  }

  t.deepEqual(omit(obj, 'p0', 'p1', 'p2', 'p3', 'p4'), { p5: obj.p5 }, 'handles only string arguments')
  t.deepEqual(omit(obj, ['p0', 'p1', 'p3', 'p5']), { p2: obj.p2, p4: obj.p4 }, 'handles single array argument')
  t.deepEqual(omit(obj, ['p0', 'p1'], 'p2', 'p3', ['p4', 'p5'], 'p6'), {}, 'handles mixed array and string arguments')
  const proto = { prototypeProperty: 'what' }
  t.deepEqual(omit(Object.create(proto), []), proto, 'sets inherited properties')

  t.end()
})

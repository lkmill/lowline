import test from 'tape'
import pick from '../src/pick.js'

test('pick', (t) => {
  const obj = {
    p0: 'value 0',
    p1: 'value 1',
    p2: 'value 2',
    p3: 'value 3',
    p4: 'value 4',
    p5: 'value 5',
  }

  t.deepEqual(pick(obj, 'p0', 'p1'), { p0: obj.p0, p1: obj.p1 }, 'handles only string arguments')
  t.deepEqual(pick(obj, ['p3', 'p5']), { p3: obj.p3, p5: obj.p5 }, 'handles single array argument')
  t.deepEqual(pick(obj, ['p0', 'p1'], 'p2', 'p3', ['p4', 'p5'], 'p6'), obj, 'handles mixed array and string arguments')
  const proto = { prototypeProperty: 'what' }
  t.deepEqual(pick(Object.create(proto), ['prototypeProperty']), proto, 'sets inherited properties')

  t.end()
})

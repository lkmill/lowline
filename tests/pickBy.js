import test from 'tape'
import sinon from 'sinon'
import pickBy from '../src/pickBy.js'

test('pickBy', (t) => {
  const obj = {
    key: 'value',
    key2: 'value 2',
  }

  const fake = sinon.fake.returns(true)

  pickBy(obj, fake)

  t.equal(fake.callCount, 2, 'predicate called twice')

  for (const key in obj) {
    t.ok(fake.calledWith(obj[key], key), `predicate called with '${obj[key]}' and '${key}'`)
  }

  t.deepEqual(pickBy({ true: true, false: false }), { true: true }, 'predicate defaults to identity')
  t.deepEqual(
    pickBy(obj, () => true),
    obj,
    'picks properties when predicate returns true',
  )
  t.deepEqual(
    pickBy(obj, () => false),
    {},
    'does not pick properties when predicate return false',
  )
  const proto = { prototypeProperty: 'what' }

  t.deepEqual(
    pickBy(Object.create(proto), () => true),
    proto,
    'sets inherited properties',
  )

  t.end()
})

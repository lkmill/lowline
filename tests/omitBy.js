import test from 'tape'
import sinon from 'sinon'
import omitBy from '../src/omitBy.js'

test('omitBy', (t) => {
  const obj = {
    key: 'value',
    key2: 'value 2',
  }

  const fake = sinon.fake.returns(true)

  omitBy(obj, fake)

  t.equal(fake.callCount, 2, 'predicate called twice')

  for (const key in obj) {
    t.ok(fake.calledWith(obj[key], key), `predicate called with '${obj[key]}' and '${key}'`)
  }

  t.deepEqual(omitBy({ true: true, false: false }), { false: false }, 'predicate defaults to identity')
  t.deepEqual(
    omitBy(obj, () => true),
    {},
    'omits properties when predicate returns true',
  )
  t.deepEqual(
    omitBy(obj, () => false),
    obj,
    'does not omit properties when predicate return false',
  )
  const proto = { prototypeProperty: 'what' }

  t.deepEqual(
    omitBy(Object.create(proto), () => false),
    proto,
    'sets inherited properties',
  )

  t.end()
})

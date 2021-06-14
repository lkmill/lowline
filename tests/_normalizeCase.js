import test from 'tape'

import normalize from '../src/_normalizeCase.js'

test('normalize', (t) => {
  t.deepEqual(normalize('oneTwoThree'), ['one', 'two', 'three'], 'camel case works')
  t.deepEqual(normalize('OneTwoThree'), ['one', 'two', 'three'], 'pascal case works')
  t.deepEqual(normalize('one-two-three'), ['one', 'two', 'three'], 'kebab case works')
  t.deepEqual(normalize('one_two_three'), ['one', 'two', 'three'], 'snake case works')
  t.deepEqual(normalize('one.two.three'), ['one', 'two', 'three'], 'dot case works')
  t.deepEqual(normalize('one-two_three.four five'), ['one', 'two', 'three', 'four', 'five'], 'mixed case works')
  t.deepEqual(normalize('one two three'), ['one', 'two', 'three'], 'space case works')
  t.deepEqual(normalize('One Two Three'), ['one', 'two', 'three'], 'start case works')

  t.end()
})

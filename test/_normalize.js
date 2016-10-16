'use strict';

require('babel-register');

const test = require('tape');

const normalize = require('../src/_normalize');

test('normalize', (t) => {
  t.deepEqual(normalize('oneTwoThree'), ['one', 'two', 'three'], 'Camel case works');
  t.deepEqual(normalize('OneTwoThree'), ['one', 'two', 'three'], 'Pascal case works');
  t.deepEqual(normalize('one-two-three'), ['one', 'two', 'three'], 'Kebab case works');
  t.deepEqual(normalize('one_two_three'), ['one', 'two', 'three'], 'Snake case works');
  t.deepEqual(normalize('one.two.three'), ['one', 'two', 'three'], 'Dot case works');
  t.deepEqual(normalize('one-two_three.four five'), ['one', 'two', 'three', 'four', 'five'], 'Mixed case works');
  t.deepEqual(normalize('one two three'), ['one', 'two', 'three'], 'Space case works');
  t.deepEqual(normalize('One Two Three'), ['one', 'two', 'three'], 'Capital Space case works');

  t.end();
});

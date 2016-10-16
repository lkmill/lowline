'use strict';

require('babel-register');

const test = require('tape');

const without = require('../src/without');

test('Without', (t) => {
  const arr = [1, 2, 3, 4, 5, 6];

  t.deepEqual(without(arr, 1), [2, 3, 4, 5, 6], 'Remove one');
  t.deepEqual(without(arr, 3, 4, 5), [1, 2, 6], 'Remove many');
  t.deepEqual(without(arr, 7, 8), arr, 'Remove none matching');

  t.end();
});

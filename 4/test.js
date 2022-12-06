var test  = require('node:test');
var assert = require('node:assert');
var day4 = require('./index.js')
const data = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;

const data2 = `2-8,3-7`;
test('synchronous passing test', (t) => {
  // This test passes because it does not throw an exception.
  const res = day4.question2(data);
  console.log('res', res);
  assert.strictEqual(res, 4);
});

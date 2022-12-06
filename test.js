var test  = require('node:test');
var assert = require('node:assert');
var day5 = require('./index.js')
const data =  `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2
 `
// test('synchronous passing test', (t) => {
//   // This test passes because it does not throw an exception.
//   const res = day5.question1(data);
//   // console.log('res', res);
//   assert.deepEqual(res, [
//     ['[C]'],
//     ['[M]'],
//     ['[Z]', '[N]', '[D]', '[P]'],
//   ]);
// });


test('synchronous passing test', (t) => {
  // This test passes because it does not throw an exception.
  const res = day5.question2(data);
  // console.log('res', res);
  assert.deepEqual(res, [
    ['[M]'],
    ['[C]'],
    ['[D]', '[N]', '[Z]', '[P]'],
  ]);
});

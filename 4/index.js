const fs = require('fs');
const list =  fs.readFileSync('./data.txt', 'utf8');

const prep = (next) => {
  const pair = next.split(',');
  return [
    pair[0].split('-').map((d) => parseInt(d)),
    pair[1].split('-').map((d) => parseInt(d))
  ]; 
}

const question1 = (data) => {
  const lines = data.trim().split('\n');
  return lines.reduce((prev, next) => {
    const [pair1, pair2] = prep(next);
    if (pair1[0] >= pair2[0] && pair1[1] <= pair2[1]) {
      return prev + 1;
    }
    if (pair2[0] >= pair1[0] && pair2[1] <= pair1[1]) {
      return prev + 1;
    }
    return prev;
  }, 0);
}

const expand = (pair) =>  new Array(pair[1] - pair[0] + 1).fill(0).map((v, i) => pair[0] + i);

const question2 = (data) => {
  const lines = data.trim().split('\n');
  return lines.reduce((prev, next) => {
    const [left, right] = prep(next).map(expand);
    const found = left.some((v) => right.includes(v));
    return found ? prev + 1 : prev
  }, 0);
}

console.log(question1(list));
console.log(question2(list));
module.exports = {
  question1,
  question2,
}

const fs = require('fs');
const list =  fs.readFileSync('./data.txt', 'utf8');
const items = list.trim().split('\n')

const sum = (p, n) => p + n;

const split = (item) => [item.slice(0, item.length /2), item.slice(-item.length/2)]

const score = (letter) => {
  const d = letter.charCodeAt(0)
  return  d > 97 ? d -96 : d -38
} 

const duplicated = items.map((item) => {
  const [a, b] = split(item);
  return score(a.split('').filter((c) => b.includes(c))[0]);
}).reduce(sum, 0)

console.log(duplicated);

/2022/leaderboard/self
const groups = items.reduce((prev, next) => {
  const last = prev[prev.length -1];
  if (last.length < 3) {
    prev[prev.length -1].push(next);
    return prev;
  }
  return [...prev, [next]];
  
}, [[]])

const matches = groups.map((g) => {
  const matched = g[0].split('').filter((one) => g[1].split('').includes(one) && g[2].split('').includes(one))
  return score(matched[0]);
}).reduce(sum, 0)

console.log(matches);

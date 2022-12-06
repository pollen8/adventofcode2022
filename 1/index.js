const fs = require('fs');
const list =  fs.readFileSync('./data.txt', 'utf8');
const items = list.split('\n');

const elfCalories = items.reduce((prev, next) => {
  if (next == '') {
    return [...prev, 0];
  }
  prev[prev.length -1] += parseInt(next);  
  return prev;
}, [0])

const max = elfCalories
.reduce((prev, next) => next > prev ? next : prev, 0)


const top3 = elfCalories.sort((a, b) => a > b ? -1 : 1)
.slice(0, 3)
.reduce((pre, next) => pre + next, 0);

const fs = require('fs');
const list =  fs.readFileSync('./data.txt', 'utf8');

const setupCrates = (start) => {
  const positions = start[start.length - 1];
  positions.split(' ');
  const numCrates = positions.split(' ').map((t) => t.trim()).filter((t) => t !== '').length;
  let crates = new Array(numCrates).fill('').map(() => ([]));
  start.slice(0, start.length - 1).forEach((l) => {
    const bits = l.split('').reduce((prev, next, i) => {
      const index = Math.floor(i / 4);
      if (!prev[index]) {
        prev[index] = [];
      }
      if (next !== '') {
        prev[index] = prev[index] + next;
      }
      return prev;
    }, [])
    bits.map((b) => b.trim()).forEach((b, i)  => {
      crates[i].push(b);
    });
    crates = crates.map((c) => c.filter((cx) => cx !== ''))
  })
  return crates
}

const breakIntoStartMoves = (lines) => {
  const split = lines.findIndex((l) => l === '');
  const start = lines.slice(0, split);
  const moves = lines.slice(split + 1)
  return  {moves, start};
}

const getMove = (move) => {
  let token = '';
  let count;
  let start;
  let end ;
  move.split('').forEach((letter, i) => {
    
    token += letter;
    if (token.includes('move ') && token.split(' ').length === 3) {
      count = token.split(' ')[1];
      token = '';
    }
    if (token.includes('from') && token.split(' ').length === 3) {
      start = parseInt(token.split(' ')[1]) - 1;
      token  = '';
    }
    if (token.includes('to') && i === move.length -1 ) {
      end = parseInt(token.split(' ')[1]) -1 ;
      token = '';
    }
  })
  return {count, start, end};
}

const question1 = (data) => {
  const lines = data.split('\n');
  const {moves, start} = breakIntoStartMoves(lines);
  const crates = setupCrates(start);
  
  moves.filter((m) => m.trim() !== '').forEach((move) => {
    const {count, start, end} = getMove(move);
    const toMove = crates[start].splice(0, count).reverse();
    crates[end] = [...toMove, ...crates[end]];
  })
  return crates.map((l) => l[0]).join('').replace(/(\[)|(\])/g, '');
}

const question2 = (data) => {
  const lines = data.split('\n');
  const {moves, start} = breakIntoStartMoves(lines);
  const crates = setupCrates(start);
  
  moves.filter((m) => m.trim() !== '').forEach((move) => {
    const {count, start, end} = getMove(move);
    const toMove = crates[start].splice(0, count);
    crates[end] = [...toMove, ...crates[end]];
  })

  return crates.map((l) => l[0]).join('').replace(/(\[)|(\])/g, '');
}


console.log(question1(list));
console.log(question2(list));

module.exports = {
  question1,
  question2,
}

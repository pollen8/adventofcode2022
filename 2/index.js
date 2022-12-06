const fs = require('fs');
const list =  fs.readFileSync('./data.txt', 'utf8');
const items = list.trim().split('\n')

const theirs = {
  'Rock': 'A',
  'Paper': 'B',
  'Scissors': 'C',
}

const yours = {
  'Rock': 'X',
  'Paper': 'Y',
  'Scissors': 'Z',
}

const points = {
  X: 1,
  Y: 2,
  Z: 3,
}

const part2 = {
  'loss': 'X',
  'draw': 'Y',
  'win': 'Z',
}

const playMap = {
  [theirs.Rock]: {[part2.loss]: yours.Scissors, [part2.draw]: yours.Rock, [part2.win]: yours.Paper},
  [theirs.Paper]: {[part2.loss]: yours.Rock, [part2.draw]: yours.Paper, [part2.win]: yours.Scissors},
  [theirs.Scissors]: {[part2.loss]: yours.Paper, [part2.draw]: yours.Scissors, [part2.win]: yours.Rock},
}

const outComes = {
  AX: 3,
  AY: 6,
  AZ: 0,
  BX: 0,
  BY: 3,
  BZ: 6,
  CX: 6,
  CY: 0,
  CZ: 3,
}

const isWin = (theirs, yours) => outComes[`${theirs}${yours}`];

const choosePlay = (theirs, outcome) => playMap[theirs][outcome];

const score = items.reduce((prev, next) => {
  const theirs = next.charAt(0);
  const yours = next.charAt(2);
  const score = isWin(theirs, yours) + points[yours];
  return prev + score;
}, 0);
console.log('score 1: ' + score);

const score2 = items.reduce((prev, next) => {
  const theirs = next.charAt(0);
  const outcome = next.charAt(2);
  const yourPlay = choosePlay(theirs, outcome);
  const score = isWin(theirs, yourPlay) + points[yourPlay];
  return prev + score;
}, 0);
console.log('score 2: '+ score2)

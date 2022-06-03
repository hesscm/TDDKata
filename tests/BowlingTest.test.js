const bowlingScore = require('../src/Bowling');

test('returns zero for unscored game', () => {
  expect(bowlingScore(0, 0)).toBe(0);
})

test('returns score for complete game with no spares or strikes', () => {
  expect(bowlingScore(1, 1)).toBe(20);
})

test('returns proper score for spares', () => {
  expect(bowlingScore(1, 9)).toBe(110);
})

test('check for a perfect game', () => {
  expect(bowlingScore(10, 0)).toBe(300);
})







// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });
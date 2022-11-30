import startGame from '../index.js';
import generateRandomNumber from '../genRandomNum.js';

const description = 'What number is missing in the progression?';

const createProgression = (begin, toSkip, length) => {
  const progression = [];
  const terminal = begin + (length * toSkip);
  for (let i = begin; i < terminal; i += toSkip) {
    progression.push(i);
  }

  return progression;
};

const playProgression = () => {
  const startRound = () => {
    const initialNum = generateRandomNumber(1, 16);
    const numToSkip = generateRandomNumber(1, 6);
    const maxLength = generateRandomNumber(7, 10) + 1;
    const indexToHide = generateRandomNumber(0, maxLength - 1);

    const progression = createProgression(initialNum, numToSkip, maxLength);
    const correctAnswer = String(progression[indexToHide]);
    progression[indexToHide] = '..';

    return [progression.join(' '), correctAnswer];
  };

  startGame(description, startRound);
};

export default playProgression;

import startGame from '../index.js';
import generateRandomNumber from '../genRandomNum.js';

const description = 'What number is missing in the progression?';

const createProgression = (begin, toSkip, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(begin + i * toSkip);
  }

  return progression;
};

const playProgression = () => {
  const startRound = () => {
    const initialNum = generateRandomNumber(1, 16);
    const numToSkip = generateRandomNumber(1, 6);
    const maxLength = generateRandomNumber(7, 11);

    const progression = createProgression(initialNum, numToSkip, maxLength);
    const indexToHide = generateRandomNumber(0, progression.length - 1);
    const correctAnswer = String(progression[indexToHide]);
    progression[indexToHide] = '..';

    return [progression.join(' '), correctAnswer];
  };

  startGame(description, startRound);
};

export default playProgression;

import startGame from '../index.js';
import generateRandomNumber from '../genRandomNum.js';

const description = 'What number is missing in the progression?';

const createProgression = (start, toSkip) => {
  const progression = [];
  for (let i = 0, j = start; i < 10; i += 1, j += toSkip) {
    progression.push(j);
  }

  return progression;
};

const hideNumber = (progression, toHide) => {
  const preparedProgression = progression.slice(0);
  for (let i = 0; i < preparedProgression.length; i += 1) {
    if (i === toHide) {
      preparedProgression[i] = '..';
    }
  }

  return preparedProgression;
};

const playProgression = () => {
  const startRound = () => {
    const initialNum = generateRandomNumber(1, 16);
    const numToSkip = generateRandomNumber(1, 6);
    const numToHide = generateRandomNumber(0, 10);

    const progression = createProgression(initialNum, numToSkip);
    const question = hideNumber(progression, numToHide).join(' ');
    const correctAnswer = String(progression[numToHide]);

    return [question, correctAnswer];
  };

  startGame(description, startRound);
};

export default playProgression;

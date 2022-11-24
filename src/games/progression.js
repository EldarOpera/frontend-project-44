import startGame from '../index.js';
import generateRandomNumber from '../genRandomNum.js';

const playProgression = () => {
  const rules = 'What number is missing in the progression?';

  const startRound = () => {
    const initialNum = generateRandomNumber(1, 16);
    const numsToSkip = generateRandomNumber(1, 6);
    const numToHide = generateRandomNumber(1, 10);

    const createProgression = (start, toSkip, toHide) => {
      const progression = [];
      let hiddenNum;
      for (let i = 0, j = start; i < 10; i += 1, j += toSkip) {
        if (i === toHide) {
          progression.push('..');
          hiddenNum = j;
        } else {
          progression.push(j);
        }
      }
      return [progression.join(' '), String(hiddenNum)];
    };

    const [question, correctAnswer] = createProgression(initialNum, numsToSkip, numToHide);

    return [question, correctAnswer];
  };

  startGame(rules, startRound);
};

export default playProgression;

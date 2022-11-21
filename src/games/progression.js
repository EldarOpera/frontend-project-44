import gameEngine from '../index.js';
import generateRandomNumber from '../genRandomNum.js';

const playProgression = () => {
  const rules = 'What number is missing in the progression?';

  const startRound = () => {
    const randomNum1 = generateRandomNumber(15);
    const randomNum2 = generateRandomNumber(5);
    const randomNum3 = generateRandomNumber(9);

    const createProgression = (initialNum, numsToSkip, numToHide) => {
      const progression = [];
      let hiddenNum;

      for (let i = 0, j = initialNum; i < 10; i += 1, j += numsToSkip) {
        if (i === numToHide) {
          progression.push('..');
          hiddenNum = j;
        } else {
          progression.push(j);
        }
      }

      return [progression.join(' '), `${hiddenNum}`];
    };

    const result = createProgression(randomNum1, randomNum2, randomNum3);
    const question = result[0];
    const correctAnswer = result[1];

    return [question, correctAnswer];
  };

  gameEngine(rules, startRound);
};

export default playProgression;

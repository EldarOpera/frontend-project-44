import gameEngine from '../index.js';
import generateRandomNumber from '../genRandomNum.js';

const progressionGame = () => {
  const progressionGameRules = 'What number is missing in the progression?';

  const progressionGameResult = () => {
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

  gameEngine(progressionGameRules, progressionGameResult);
};

export default progressionGame;

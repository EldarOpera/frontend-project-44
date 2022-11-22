import gameEngine from '../index.js';
import generateRandomNumber from '../genRandomNum.js';

const playProgression = () => {
  const rules = 'What number is missing in the progression?';

  const startProgressionRound = () => {
    const initialNum = generateRandomNumber(15);
    const numsToSkip = generateRandomNumber(5);
    const numToHide = generateRandomNumber(9);

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

    const result = [progression.join(' '), `${hiddenNum}`];
    const question = result[0]; // прогрессия с одним скрытым числом
    const correctAnswer = result[1]; // скрытое число

    return [question, correctAnswer];
  };

  gameEngine(rules, startProgressionRound);
};

export default playProgression;

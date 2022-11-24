import gameEngine from '../index.js';
import generateRandomNumber from '../genRandomNum.js';

const playProgression = () => {
  const rules = 'What number is missing in the progression?';

  const startProgressionRound = () => {
    const initialNum = generateRandomNumber(1, 16);
    const numsToSkip = generateRandomNumber(1, 6);
    const numToHide = generateRandomNumber(1, 10);

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

    const question = progression.join(' '); // прогрессия с одним скрытым числом
    const correctAnswer = `${hiddenNum}`; // скрытое число

    return [question, correctAnswer];
  };

  gameEngine(rules, startProgressionRound);
};

export default playProgression;

import gameEngine from '../index.js';
import generateRandomNumber from '../genRandomNum.js';

const playIsEven = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const startRound = () => {
    const randomNumber = generateRandomNumber(1, 21);

    const question = `${randomNumber}`;
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

    return [question, correctAnswer];
  };

  gameEngine(rules, startRound);
};

export default playIsEven;

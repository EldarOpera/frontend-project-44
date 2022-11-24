import gameEngine from '../index.js';
import generateRandomNumber from '../genRandomNum.js';

const playIsEven = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const startRound = () => {
    const randomNumber = generateRandomNumber(1, 21);

    const isEven = (num) => num % 2 === 0 ? 'yes' : 'no';

    const question = String(randomNumber);
    const correctAnswer = isEven(randomNumber);

    return [question, correctAnswer];
  };

  gameEngine(rules, startRound);
};

export default playIsEven;
